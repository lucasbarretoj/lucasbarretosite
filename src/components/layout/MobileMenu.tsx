"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

type MobileMenuProps = {
  contactHref: string;
};

export function MobileMenu({ contactHref }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const trigger = triggerRef.current;

    document.addEventListener("keydown", handleEscape);
    document.body.dataset.menuOpen = "true";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      delete document.body.dataset.menuOpen;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu__trigger"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div
        ref={panelRef}
        id="mobile-navigation"
        className="mobile-menu__panel"
        data-open={isOpen}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Navegação mobile">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          href={contactHref}
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        >
          <MessageCircle aria-hidden="true" />
          Falar comigo
        </Button>
      </div>
    </div>
  );
}
