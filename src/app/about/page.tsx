"use client";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaDatabase,
  FaPython,
  FaJava,
  FaReact,
  FaStar,
  FaAward,
  FaFlask,
  FaSchool,
  FaTrophy,
  FaUsers,
  FaNodeJs,
  FaUniversity,
  FaGitAlt,
  FaDocker,
  FaChalkboardTeacher, // Add this
  FaBook, // Add this
  FaFlag, // Add this
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,

  SiKeras,
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
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animation";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Title Section */}
      <motion.div className="text-center mb-16" {...fadeInDown}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-align-fix"
          {...fadeInUp}
        >
          I am a passionate 4th year Computer Science student interested in
          problem-solving and Machine Learning. Currently enhancing my
          development skills while working as a Teaching Assistant and
          maintaining a merit-based scholarship.
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          My Skills
        </motion.h2>

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
                // {
                //   icon: <FaDatabase className="text-blue-500" />,
                //   name: "REST APIs",
                // },
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
                // { icon: <FaDatabase className="text-gray-500" />, name: "SQL" },
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
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-8" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2
          className="text-3xl font-bold  text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-primary/10 text-primary mr-4 mt-1">
                <FaGraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                  Teaching Assistant / Student Tutor
                </h3>
                <p className="text-primary mb-3">
                  Brac University • 2024 - Present
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Teaching Assistant for STA201, STA101, and PHY111</li>
                  <li>
                    Conducted weekly student consultations and academic support
                  </li>
                  <li>Evaluated assignments, quizzes, and exam scripts</li>
                </ul>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </motion.section>

      <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.4 }}>
        {/* <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2> */}

        <div className="max-w-4xl mx-auto">
          {/* University Header */}
          <motion.div
            className="flex items-center justify-center mb-10"
            {...fadeInUp}
          >
            <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
              <FaUniversity className="text-primary mr-3" />
              <span className="font-semibold text-gray-800 dark:text-white">
                BRAC University
              </span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                2024 - Present
              </span>
            </div>
          </motion.div>

          {/* Timeline container */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary to-gray-200 dark:to-gray-700" />

            {/* Current Position */}
            <motion.div
              className="relative pl-20 pb-12 group"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <FaChalkboardTeacher className="h-4 w-4" />
              </div>

              {/* Position card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Undergrad Teaching Assistant
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      <span className="font-medium">
                        Department of Computer Science & Engineering
                      </span>
                    </p>
                    <p className="text-primary ">Brac University</p>
                  </div>
                  <span className="inline-block  sm:mt-0 px-3 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-medium">
                    June 2024 - Present
                  </span>
                </div>
                {/* Conducted weekly in-person and online consultations, offering
                academic guidance and subject clarification to CSE freshmen
                across multiple platforms including Discord. Collaborated with
                faculty to support students academically, assisted
                probation/retake students, and upheld departmental standards
                through regular reporting and communication. */}
                {/* <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Teaching{" "}
                      <span className="font-medium text-gray-800 dark:text-white">
                        CSE111: Programming Language I
                      </span>
                    </p>
                  </div>
                </div> */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Teaching:{" "}
                      <span className="font-medium text-gray-800 dark:text-white">
                        CSE111(Object-oriented programming)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Conducted weekly 15hours inperson and online
                      consultations, offering academic guidance, subject
                      clarification to CSE freshmen across multiple platforms
                      including Discord.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Collaborated with faculty to support students
                      academically, assisted probation/retake students.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Previous Position */}
            <motion.div
              className="relative pl-20 pb-12 group"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <FaBook className="h-4 w-4" />
              </div>

              {/* Position card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Undergrad Teaching Assistant
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      <span className="font-medium">
                        Department of Mathematics & Natural Sciences
                      </span>
                    </p>
                    <p className="text-primary ">Brac University</p>
                  </div>
                  <span className="inline-block mt-1 sm:mt-0 px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">
                    May 2024 - May 2025
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Taught{" "}
                      <span className="font-medium text-gray-800 dark:text-white">
                        STA201 (Statistics), STA101, and PHY111 (Physics)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Conducted weekly student consultations and provided
                      academic support
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      Evaluated assignments, quizzes, and exam scripts for 100+
                      students
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* University Footer */}
            <motion.div
              className="relative pl-20 pt-6 text-center"
              {...fadeInUp}
            >
              <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-full">
                <FaUniversity className="mr-2" />
                Continuing my teaching journey at BRAC University
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          {...fadeInUp}
        >
          Academic Journey
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* BRAC University */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              CURRENT
            </div>
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FaUniversity className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-primary font-medium">BRAC University</p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-medium">
                    2022 - 2025 (Expected)
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    {/* <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Achievements:
                    </h4> */}
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaStar className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Current CGPA: 3.85/4.00
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaAward className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Merit-based Scholarship Recipient
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    {/* <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Research Focus:
                    </h4> */}
                    <div className="flex items-start">
                      <FaFlask className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Thesis:{" "}
                        <span className="font-medium">
                          Machine Unlearning for Class Removal through
                          SISA-based Deep Neural Network Architectures
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DRMC */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-teal-500/10 text-teal-500 mr-4">
                <FaSchool className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <p className="text-teal-500 font-medium">
                      Dhaka Residential Model College
                    </p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">
                    2018 - 2020
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Result:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaStar className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          GPA: 5.00/5.00 (Science Group)
                        </span>
                      </li>
                      <li className="flex items-start">
                        {/* <FaTrophy className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Top 1% of graduating class
                        </span> */}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Notable Activities:
                    </h4>
                    <div className="flex items-start">
                      <FaUsers className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Member of Science Club and Debate Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
