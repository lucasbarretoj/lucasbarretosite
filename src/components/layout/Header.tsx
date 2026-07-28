"use client";

import { MessageCircle } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Lucas Barreto, início">
          Lucas Barreto<span>.</span>
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="site-header__cta" href={siteConfig.contactHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" />
          Falar comigo
        </Button>

        <MobileMenu contactHref={siteConfig.contactHref} />
      </div>
      <motion.div className="site-header__progress" style={{ scaleX: progress }} />
    </header>
  );
}
