"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AccordionProps = {
  items: ReadonlyArray<{ question: string; answer: string }>;
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className="accordion__item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.question}
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-answer-${index}`} hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
