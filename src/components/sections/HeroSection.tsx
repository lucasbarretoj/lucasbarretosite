"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

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
            {heroContent.title.map((line) => (
              <span className={line.accent ? "hero__accent" : undefined} key={line.text}>
                {line.text}
              </span>
            ))}
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
            <Button href={siteConfig.contactHref} target="_blank" rel="noopener noreferrer">
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
        >
          <Image
            className="hero__portrait-image"
            src={siteConfig.assets.portrait}
            alt="Retrato profissional de Lucas Barreto"
            fill
            priority
            sizes="(min-width: 1024px) 36vw, (min-width: 768px) 80vw, calc(100vw - 2.5rem)"
          />
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
