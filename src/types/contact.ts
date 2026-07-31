export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  company: string;
  instagram: string;
  message: string;
  website: string;
};

export type ContactPayload = ContactFormValues & {
  source: string;
  submissionId: string;
};

export type ContactResponse = {
  success: boolean;
  message?: string;
};
