const REQUIRED_PROPERTIES = ["SPREADSHEET_ID", "SHEET_NAME", "NOTIFICATION_EMAIL"];
const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  email: 160,
  company: 120,
  instagram: 200,
  message: 2000,
  source: 500,
  submissionId: 100,
};

function doPost(event) {
  try {
    const payload = parsePayload_(event);

    // Bots recebem uma resposta neutra sem gravar dados nem enviar e-mail.
    if (sanitizeText_(payload.website, 200)) return jsonResponse_({ success: true });

    const lead = validateAndNormalize_(payload);
    assertNotRateLimited_(lead);

    const properties = getConfiguration_();
    const spreadsheet = SpreadsheetApp.openById(properties.SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(properties.SHEET_NAME);
    if (!sheet) throw new Error("Configured sheet was not found.");

    const timestamp = new Date();
    const row = appendLead_(sheet, timestamp, lead);
    sendNotification_(properties.NOTIFICATION_EMAIL, timestamp, lead, sheet, row);

    return jsonResponse_({
      success: true,
      message: "Contato registrado com sucesso.",
    });
  } catch (error) {
    console.error("Contact form processing failed.");
    return jsonResponse_({
      success: false,
      message: "Não foi possível registrar o contato agora. Tente novamente.",
    });
  }
}

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) throw new Error("Missing request body.");
  const payload = JSON.parse(event.postData.contents);
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) throw new Error("Invalid payload.");
  return payload;
}

function validateAndNormalize_(payload) {
  const lead = {
    name: sanitizeText_(payload.name, MAX_LENGTHS.name),
    phone: sanitizeText_(payload.phone, MAX_LENGTHS.phone),
    email: sanitizeText_(payload.email, MAX_LENGTHS.email).toLowerCase(),
    company: sanitizeText_(payload.company, MAX_LENGTHS.company),
    instagram: normalizeInstagram_(payload.instagram),
    message: sanitizeMultiline_(payload.message, MAX_LENGTHS.message),
    source: sanitizeText_(payload.source, MAX_LENGTHS.source),
    submissionId: sanitizeText_(payload.submissionId, MAX_LENGTHS.submissionId),
  };

  if (lead.name.length < 2) throw new Error("Invalid name.");
  if (!/^[\d\s()+.\-]{8,30}$/.test(lead.phone)) throw new Error("Invalid phone.");
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) throw new Error("Invalid email.");
  if (lead.message.length < 10) throw new Error("Invalid message.");
  if (!/^https?:\/\//i.test(lead.source) || lead.source.indexOf("ascendedigital.com.br/lucasbarreto") === -1) throw new Error("Invalid source.");
  if (!/^[a-zA-Z0-9-]{16,100}$/.test(lead.submissionId)) throw new Error("Invalid submission id.");

  return lead;
}

function sanitizeText_(value, maxLength) {
  return String(value || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function sanitizeMultiline_(value, maxLength) {
  return String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

function normalizeInstagram_(value) {
  const instagram = sanitizeText_(value, MAX_LENGTHS.instagram);
  if (!instagram) return "";
  if (/^@?[a-zA-Z0-9._]{1,30}$/.test(instagram)) return instagram.charAt(0) === "@" ? instagram : "@" + instagram;
  if (/^https?:\/\/(?:www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?$/i.test(instagram)) return instagram;
  throw new Error("Invalid Instagram.");
}

function assertNotRateLimited_(lead) {
  const fingerprint = [lead.phone, lead.email].join("|");
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, fingerprint)
    .map(function (byte) { return (byte + 256).toString(16).slice(-2); })
    .join("");
  const cache = CacheService.getScriptCache();
  const key = "contact:" + digest;
  if (cache.get(key)) throw new Error("Repeated submission.");
  cache.put(key, "1", 60);
}

function getConfiguration_() {
  const properties = PropertiesService.getScriptProperties().getProperties();
  REQUIRED_PROPERTIES.forEach(function (key) {
    if (!properties[key]) throw new Error("Missing script property: " + key);
  });
  return properties;
}

function appendLead_(sheet, timestamp, lead) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet.appendRow([
      timestamp,
      safeForSheet_(lead.name),
      safeForSheet_(lead.phone),
      safeForSheet_(lead.instagram),
      safeForSheet_(lead.email),
      safeForSheet_(lead.company),
      safeForSheet_(lead.message),
      safeForSheet_(lead.source),
      "Novo",
    ]);
    return sheet.getLastRow();
  } finally {
    lock.releaseLock();
  }
}

function safeForSheet_(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function sendNotification_(recipient, timestamp, lead, sheet, row) {
  const formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd/MM/yyyy 'às' HH:mm:ss");
  const fields = [
    ["Data", formattedDate],
    ["Nome", lead.name],
    ["WhatsApp ou telefone", lead.phone],
    ["Instagram", lead.instagram || "Não informado"],
    ["E-mail", lead.email || "Não informado"],
    ["Empresa / projeto", lead.company || "Não informado"],
    ["Mensagem", lead.message],
    ["Página de origem", lead.source],
  ];
  const body = fields.map(function (field) { return field[0] + ": " + field[1]; }).join("\n\n");
  const htmlBody = fields.map(function (field) {
    return "<p><strong>" + escapeHtml_(field[0]) + ":</strong><br>" + escapeHtml_(field[1]).replace(/\n/g, "<br>") + "</p>";
  }).join("");

  try {
    MailApp.sendEmail({
      to: recipient,
      subject: "Novo contato pelo site de Lucas Barreto",
      body: body,
      htmlBody: htmlBody,
      name: "Site Lucas Barreto",
    });
  } catch (error) {
    sheet.getRange(row, 9).setValue("E-mail pendente");
    console.error("Lead saved, but notification e-mail failed.");
  }
}

function escapeHtml_(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
