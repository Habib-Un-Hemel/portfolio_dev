"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
// import {
//   fadeInUp,
//   fadeInDown,
//   fadeIn,
//   staggerContainer,
//   cardHover,
//   cardHoverSmall
// } from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        // {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        className="mb-16"
        // {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          {/* I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions. */}
          I am a passionate 4th year Computer Science student interested in
          problem-solving and Machine Learning. Currently, I am enhancing my
          development skills by working on full-stack projects using the MERN
          stack, alongside my role as a Teaching Assistant and maintaining a
          merit-based scholarship.In addition to my academic pursuits, I enjoy
          maintaining a healthy and active lifestyle.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        // {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="section-title"
          //  {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            // variants={fadeInUp}
            // {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React </li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            // variants={fadeInUp}
            // {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>SpringBoot</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            // variants={fadeInUp}
            // {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-16"
        //  {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="section-title"
          // {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          // variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            // variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Teaching Assistant / Student Tutor
            </h3>
            <p className="text-primary mb-2">Brac University• 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Teaching Assistant for STA201, STA101, and PHY111 at the
                Department of Mathematics and Natural Science
              </li>
              <li>
                Conducted weekly student consultations and provided academic
                support in statistics and physics
              </li>
              <li>
                Evaluated assignments, quizzes, and exam scripts to ensure
                accurate and fair grading
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        // {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          className="section-title"
          // {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          // variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            // variants={fadeInUp}
            // {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-primary mb-2">Brac University • 2022 - 2025</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web
              development.
            </p>
            <p className="text-secondary">
              CGPA: 3.85 out of 4.00
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
