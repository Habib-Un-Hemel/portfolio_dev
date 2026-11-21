"use client";

import { FaFileAlt, FaFilePdf, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/utils/animation";

const authors = [
  "Ishrak Hamim Mahi",
  "Siam Ferdous",
  "Md Sakib Sadman Badhon",
  "Nabid Hasan Omi",
  "Md Habibun Nabi Hemel",
  "Farig Yousuf Sadeque",
  "Md. Tanzim Reza",
];

export default function Publications() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          Publications
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.article
          className="glass-card max-w-4xl mx-auto p-6 sm:p-8"
          {...fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="label-tag px-3 py-1 rounded-full bg-primary/10 text-primary">
              Preprint
            </span>
            <span className="label-tag">2026</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Machine Unlearning for Class Removal through SISA-based Deep
            Neural Network Architectures
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {authors.map((author, index) => (
              <span key={author}>
                <span
                  className={
                    author === "Md Habibun Nabi Hemel"
                      ? "font-semibold text-primary"
                      : ""
                  }
                >
                  {author}
                </span>
                {index < authors.length - 1 && ", "}
              </span>
            ))}
          </p>

          <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-5">
            arXiv preprint (cs.CV)
          </p>

          <div className="flex gap-3 mb-6">
            <FaQuoteLeft className="text-primary/40 h-4 w-4 mt-1 flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-300">
              A modified SISA framework with a reinforced replay mechanism
              and a gating network that removes an entire class from a
              trained CNN, with little loss in accuracy and far less
              compute than retraining from scratch. A version is being
              prepared for an international conference.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 border-t border-gray-100 dark:border-white/10 pt-5">
            <a
              href="https://arxiv.org/abs/2604.27804"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
            >
              <FaFileAlt className="h-4 w-4" />
              arXiv
            </a>
            <a
              href="https://arxiv.org/pdf/2604.27804"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
            >
              <FaFilePdf className="h-4 w-4" />
              PDF
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
