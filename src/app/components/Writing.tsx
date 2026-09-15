"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animation";
import { writings } from "@/contents/writings";

export default function Writing() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          Writing
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>
        <motion.p
          className="text-lg text-secondary mb-12 text-center"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Articles I&apos;ve published on LinkedIn.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {writings.map((post) => (
            <motion.a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-2 text-primary font-medium">
                    <FaLinkedin className="h-4 w-4" />
                    Read on LinkedIn
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
