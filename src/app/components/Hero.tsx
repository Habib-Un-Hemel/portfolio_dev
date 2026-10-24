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
import Magnetic from "./Magnetic";

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
    <section className="py-14 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-10 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            className="text-center md:text-left"
            {...fadeInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="glass label-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pulse-dot" />
              Junior Software Engineer @ iFarmer.asia
            </motion.div>

            <h1 className="font-bold leading-tight mb-5 text-4xl sm:text-5xl lg:text-[3.25rem]">
              <span className="block text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-1">
                Hi, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Habibun
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Nabi
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Hemel
                </motion.span>
              </span>
              <span className="pulse-dot ml-2 align-middle" />
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
              Junior Software Engineer • Java, Python, Ruby On Rails • Former
              Teaching Assistant • DofE-Bronze • Aspiring Lecturer
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto md:mx-0 text-align-fix">
              Outside of code, you&apos;ll find me on the field or at the gym.
              Sports keep me grounded. One year into my first job as an
              engineer, I&apos;ve learned more about building real systems
              than any classroom taught me. Being an INTP means I think in
              systems and love figuring out how things work.
            </p>

            <p className="label-tag mb-3">Connect with me here</p>
            <div className="flex justify-center md:justify-start gap-3 mb-6">
              <Magnetic strength={10}>
                <Link
                  href="https://github.com/Habib-Un-Hemel"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <FaGithub />
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <Link
                  href="https://www.linkedin.com/in/habibun-nabi-hemel/"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <FaLinkedin />
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <Link
                  href="https://x.com/Habib33hemel"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <FaTwitter />
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <Link
                  href="mailto:habibun33hemel@gmail.com"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <FaMailBulk />
                </Link>
              </Magnetic>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Magnetic strength={8} className="w-full md:w-auto">
                <Link
                  href="#projects"
                  className="glass hover:border-primary/40 hover:text-primary px-8 py-3 rounded-full transition-colors w-full md:w-auto text-center font-medium block"
                >
                  View Projects
                </Link>
              </Magnetic>
              <Magnetic strength={8} className="w-full md:w-auto">
                <Link
                  href="https://drive.google.com/drive/folders/1-EDuIhN8IDAl3Tq_he0DxPLYK5-qvPZp?usp=sharing"
                  className="shine-btn bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-full transition-colors w-full md:w-auto text-center font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2"
                >
                  Download CV
                  <FaDownload className="text-sm" />
                </Link>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            {...scaleIn}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl -z-10" />
              <div className="glass relative rounded-[2rem] p-3 border-dashed">
                {/* Corner marks */}
                <span className="absolute -top-1.5 -left-1.5 h-3 w-3 border-t-2 border-l-2 border-primary/60 rounded-tl-sm" />
                <span className="absolute -top-1.5 -right-1.5 h-3 w-3 border-t-2 border-r-2 border-primary/60 rounded-tr-sm" />
                <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b-2 border-l-2 border-primary/60 rounded-bl-sm" />
                <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 border-b-2 border-r-2 border-primary/60 rounded-br-sm" />
                <Image
                  src="/formal_main.png"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="rounded-[1.6rem] object-cover h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
