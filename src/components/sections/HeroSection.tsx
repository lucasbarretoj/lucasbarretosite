"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/data/hero";
import { motionTokens } from "@/lib/animations";

const transition = { duration: motionTokens.duration.slow, ease: motionTokens.ease };

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { y: motionTokens.distance.reveal };

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p
            className="eyebrow hero__eyebrow"
            initial={initial}
            animate={{ y: 0 }}
            transition={transition}
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={initial}
            animate={{ y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
          >
            <span>{heroContent.title.start}</span>
            <span>{heroContent.title.middle}</span>
            <span className="hero__accent">{heroContent.title.accent}</span>
            <span>{heroContent.title.end}</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={initial}
            animate={{ y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={initial}
            animate={{ y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.24 }}
          >
            <Button href={siteConfig.contactHref}>
              <MessageCircle aria-hidden="true" />
              {heroContent.primaryCta}
            </Button>
            <Button href={siteConfig.workHref} variant="secondary">
              {heroContent.secondaryCta}
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.dl
            className="hero__metrics"
            initial={initial}
            animate={{ y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.32 }}
          >
            {heroContent.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="hero__portrait"
          initial={reduceMotion ? false : { scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.18 }}
          role="img"
          aria-label="Espaço reservado para o retrato de Lucas Barreto"
        >
          <div className="hero__portrait-placeholder" aria-hidden="true">
            <span>LB</span>
            <small>Foto original pendente</small>
          </div>
          <div className="hero__portrait-label">
            <strong>Lucas Barreto</strong>
            <span>Estrategista de growth</span>
          </div>
        </motion.div>
      </div>

      <div className="hero__specialties" aria-label="Especialidades">
        <div>
          {[...heroContent.specialties, ...heroContent.specialties].map(
            (specialty, index) => (
              <span key={`${specialty}-${index}`}>
                {specialty}
                <i aria-hidden="true">✳</i>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
