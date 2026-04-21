"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  cubicBezier,
  type Variants,
} from "framer-motion";
import styles from "./FAQ.module.css";
import { areas } from "@/data/areasOfExpertise";
import { CryptoRain } from "./CryptoRain";

const expo = cubicBezier(0.16, 1, 0.3, 1);

const colVar: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: expo },
  },
};

const logoVar: Variants = {
  hidden: { opacity: 0, x: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.15, ease: expo },
  },
};

const listVar: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: expo },
  },
};
function IconCode() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconStack() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <rect x="2" y="10" width="20" height="5" rx="1" />
      <rect x="2" y="17" width="20" height="5" rx="1" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconFlow() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  );
}
function IconTag() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

const areaFaqs = areas.map((area) => ({
  icon: area.icon,
  q: `Que comprend mon expertise en ${area.title} ?`,
  a: area.desc,
}));

const faqs = [
  ...areaFaqs,
  // {
  //   icon: <IconClock />,
  //   q: "Combien de temps faut-il pour livrer un projet ?",
  //   a: "Un site vitrine simple est livré en 2 à 4 semaines. Un projet plus complexe (e-commerce, SaaS) prend généralement 4 à 10 semaines selon le périmètre défini ensemble.",
  // },
  // {
  //   icon: <IconShield />,
  //   q: "Proposez-vous un suivi après la livraison ?",
  //   a: "Oui, je propose des contrats de maintenance et un support post‑livraison pour assurer stabilité et évolutions.",
  // },
  // {
  //   icon: <IconFlow />,
  //   q: "Comment se déroule le processus de travail ?",
  //   a: "Découverte, design, développement et livraison — je vous implique à chaque étape avec des points réguliers.",
  // },
  // {
  //   icon: <IconTag />,
  //   q: "Quel est le tarif pour un projet ?",
  //   a: "Les tarifs varient selon la complexité. Un site vitrine démarre à partir de 800€. Je fournis un devis sur-mesure après échange.",
  // },
];

const carouselImages = [
  "/images/projects/feonix.png",
  "/images/projects/jtnova.png",
  "/images/projects/julia.png",
  "/images/projects/vina.png",
  "/images/projects/vitascore.png",
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Left column ── */}
        <motion.div
          className={styles.left}
          variants={colVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className={styles.topLabel}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="var(--color-accent)"
              aria-hidden="true"
            >
              <path d="M12 2L9.5 9.5H2L8 14L5.5 21.5L12 17L18.5 21.5L16 14L22 9.5H14.5Z" />
            </svg>
            {"FAQ"}
          </div>
          <h2 className={styles.title}>
            Questions <span className={styles.accent}>{"fréquentes"}</span>
          </h2>

          <motion.div
            className={styles.list}
            variants={listVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} className={styles.item} variants={itemVar}>
                <button
                  className={`${styles.question} ${open === i ? styles.questionOpen : ""}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className={styles.qLeft}>
                    <span
                      className={`${styles.qIcon} ${open === i ? styles.qIconOpen : ""}`}
                    >
                      {faq.icon}
                    </span>
                    <span className={styles.qText}>{faq.q}</span>
                  </span>
                  <span
                    className={`${styles.chevron} ${open === i ? styles.chevronOpen : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: 0.35, ease: expo },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.22 },
                      }}
                      className={styles.answerWrap}
                    >
                      <p className={styles.answer}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right column — image carousel ── */}
        <motion.div
          className={styles.right}
          variants={logoVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <CryptoRain />
        </motion.div>
      </div>
    </section>
  );
}
