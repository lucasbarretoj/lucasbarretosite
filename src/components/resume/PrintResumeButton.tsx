"use client";

import { Printer } from "lucide-react";

export function PrintResumeButton() {
  return (
    <button className="button button--secondary resume-print" type="button" onClick={() => window.print()}>
      <Printer aria-hidden="true" />
      Imprimir currículo
    </button>
  );
}
