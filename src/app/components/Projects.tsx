"use client";

import { useMemo, useState } from "react";
import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animation";

export default function Projects() {
  const categories = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach((project) =>
      project.categories.forEach((category) => seen.add(category))
    );
    return ["All", ...Array.from(seen)];
  }, []);

  const [activeCategory, setActiveCategory] =
    useState<string>("Real-World Projects");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          My Projects
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all m-1 ${
                  activeCategory === category
                    ? "bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-primary-300"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-3 text-gray-800 dark:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-300 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="h-5 w-5" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="h-5 w-5" />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 