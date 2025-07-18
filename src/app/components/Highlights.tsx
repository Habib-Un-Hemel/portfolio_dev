"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animation";

type Card = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
};

const achievementAwards: Card[] = [
  {
    title: "8-Time Merit Scholar",
    subtitle: "BRAC University",
    description:
      "Maintained 75% scholarship with CGPA 3.8+ throughout academic journey",
    image: "/highlight/scholarship.png",
  },
  {
    title: "VC's and Dean's List Award",
    subtitle: "BRAC University",
    description:
      "Received VC's List Award in 3 semesters (GPA 3.9–4.0) and Dean's List Award in 5 semesters (GPA 3.8–3.9)",

    image: "/highlight/vc.png",
  },
  {
    title: "Duke of Edinburgh's International Award",
    subtitle: "Bronze Standard",
    description:
      "Recognized for exceptional leadership and community service contributions",
    image: "/highlight/duke3.png",
  },
  {
    title: "Code Samurai 2024",
    subtitle: "National Hackathon",
    description: "Ranked 116 out of 406 teams (Top 30%)",
    image: "/highlight/sumrai3.png",
  },
];

const certifications: Card[] = [
  {
    title: "Problem Solver - CodeChef",
    subtitle: "Top 15% among 600,000+ users",
    description:
      "Achieved highest rating of 1149, demonstrating strong algorithmic thinking skills",
    image: "/highlight/codechef.png",
  },
  {
    title: "Problem Solver - LeetCode",
    subtitle: "Highest Rating: 1,529",
    description:
      "Solved 100+ questions across various data structures and algorithms topics",
    image: "/highlight/leetcode2.png",
  },
];

const technicalCertifications: Card[] = [
  {
    title: "Introduction to Quantum Computing",
    subtitle: "IBM Quantum / Qiskit",
    description:
      "Learned fundamental concepts of quantum mechanics, qubits, quantum gates, and basic quantum algorithms",
    image: "/highlight/quantum.png",
  },
  // {
  //   title: "Full Stack Web Development",
  //   subtitle: "Coursera / Meta",
  //   description:
  //     "Mastered modern web technologies including React, Node.js, RESTful APIs, and database design",
  //   image: "/highlight/web-dev.png",
  // },
  // {
  //   title: "Advanced Machine Learning",
  //   subtitle: "DeepLearning.AI",
  //   description:
  //     "Completed specialized courses in neural networks, computer vision, and natural language processing",
  //   image: "/highlight/ml.png",
  // },
];

const clubsActivities: Card[] = [
  // {
  //   title: "Arora Science Care",
  //   subtitle: "Co-founder and Mentor",
  //   description: "Teaching ICT and Physics to classes 9-12",
  //   image: "/highlight/arora.png",
  // },
  {
    title: "BRAC University Computer Club",
    subtitle: "Executive Member",
    description:
      "Served in Communication and Marketing department supporting 200+ members",
    image: "/highlight/bucc2.png",
  },
  {
    title: "Project Orko by BRAC",
    subtitle: "Math Mentor Volunteer",
    description: "Teaching underprivileged secondary school students",
    image: "/highlight/orko.png",
  },
];

export default function Highlights() {
  const [activeSection, setActiveSection] = useState<string>("achievements");

  const sections = [
    {
      id: "achievements",
      title: "Achievement & Awards",
      data: achievementAwards,
    },
    {
      id: "certifications",
      title: "Problem Solving",
      data: certifications,
    },
    {
      id: "technical",
      title: "Technical Certifications",
      data: technicalCertifications,
    },
    {
      id: "clubs",
      title: "Leadership & Activities",
      data: clubsActivities,
    },
  ];

  return (
    <section className="">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          Highlights
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex-wrap justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all m-1 ${
                  activeSection === section.id
                    ? "bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-primary-300"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content for each section */}
        {sections.map((section) => (
          <div
            key={section.id}
            style={{ display: activeSection === section.id ? "block" : "none" }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white"
              {...fadeInUp}
            >
              {section.title}
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {section.data.map((item, index) => (
                <motion.article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full"
                  variants={fadeInUp}
                  {...cardHoverSmall}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                    />
                  </div>

                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-2 text-gray-800 dark:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.title}
                    </motion.h3>

                    {item.subtitle && (
                      <motion.p
                        className="text-sm font-medium text-primary dark:text-primary-300 mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.subtitle}
                      </motion.p>
                    )}

                    {item.description && (
                      <motion.p
                        className="text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
