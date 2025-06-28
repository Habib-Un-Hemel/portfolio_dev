"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMailBulk,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Motion variants
const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

const Hero = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side: Text Content (will appear second on mobile) */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          {...fadeInLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-2 flex-wrap">
            Hi, I&apos;m
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-primary"
            >
              Habibun
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-primary"
            >
              Nabi
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-primary"
            >
              Hemel
            </motion.span>
            <span className="text-primary animate-ping ml-1 w-2 h-2 bg-primary rounded-full inline-block"></span>
          </h1>

          <p className="text-lg  md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Undergrad Teaching Assistant • Aspiring Software Engineer •
            DofE-Bronze • Full Stack(MERN) • Java, Python, JavaScript
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 text-align-fix">
            I am a passionate 4th year Computer Science student interested in
            problem-solving and Machine Learning. Currently, I am enhancing my
            development skills by working on full-stack projects using the MERN
            stack, alongside my role as a Teaching Assistant and maintaining a
            merit-based scholarship.
          </p>

          <p className="font-medium mb-3">Connect with me here! ⬇️</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link
              href="https://github.com/Habib-Un-Hemel"
              className="text-3xl hover:text-primary transition duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/habibun-nabi-hemel/"
              className="text-3xl hover:text-primary transition duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://x.com/Habib33hemel"
              className="text-3xl hover:text-primary transition duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="mailto:habibun33hemel@gmail.com"
              className="text-3xl hover:text-primary transition duration-300"
            >
              <FaMailBulk />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="bg-teal-800 text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors w-full md:w-auto text-center"
            >
              View Projects
            </Link>
            {/* <Link
              href="/contact"
              className="bg-gray-500 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors w-full md:w-auto text-center"
            >
              Contact Me
            </Link> */}
            <Link
              href="https://drive.google.com/file/d/14jaFTRxzspkJAS1uotYH_51Ec8hq9f5U/view?usp=sharing"
              className=" bg-primary text-white hover:bg-teal-900 px-8 py-3 rounded-lg transition-colors w-full md:w-auto text-center font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Download CV
              <FaDownload className="text-sm" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Circular Image (will appear first on mobile) */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          {...scaleIn}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/formal_main.png"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full object-cover ring-4 ring-primary shadow-lg h-72 w-72"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
