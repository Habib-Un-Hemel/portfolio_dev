"use client";

import {
  FaCode,
  FaDatabase,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiStreamlit,
  SiLinux,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  cardHover,
} from "@/utils/animation";

export default function Skills() {
  return (
    <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.2 }}>
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        {...fadeInUp}
      >
        My Skills
      </motion.h2>

      {/* Add px-4 sm:px-6 lg:px-8 for responsive horizontal padding */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Programming Languages */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FaCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Programming Languages
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                {
                  icon: <SiJavascript className="text-yellow-400" />,
                  name: "JavaScript",
                },
                {
                  icon: <FaPython className="text-blue-500" />,
                  name: "Python",
                },
                { icon: <FaJava className="text-red-500" />, name: "Java" },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Frontend Development */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FaReact className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Frontend
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                {
                  icon: <SiTailwindcss className="text-cyan-500" />,
                  name: "Tailwind CSS",
                },
                {
                  icon: <FaCode className="text-gray-500" />,
                  name: "HTML5/CSS3",
                },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Development */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FaNodeJs className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Backend
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                {
                  icon: <FaNodeJs className="text-green-500" />,
                  name: "Node.js",
                },
                {
                  icon: (
                    <SiExpress className="text-gray-800 dark:text-gray-300" />
                  ),
                  name: "Express",
                },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FaDatabase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Databases
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                {
                  icon: <SiMongodb className="text-green-500" />,
                  name: "MongoDB",
                },
                { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI/ML */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <SiTensorflow className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                AI/ML
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                {
                  icon: <SiPytorch className="text-red-500" />,
                  name: "PyTorch",
                },
                {
                  icon: <SiTensorflow className="text-orange-500" />,
                  name: "TensorFlow",
                },
                {
                  icon: <SiStreamlit className="text-red-400" />,
                  name: "Streamlit",
                },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FaGitAlt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Tools
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
                {
                  icon: <FaDocker className="text-blue-400" />,
                  name: "Docker",
                },
                {
                  icon: (
                    <SiLinux className="text-gray-800 dark:text-gray-300" />
                  ),
                  name: "Linux",
                },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
