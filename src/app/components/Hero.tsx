import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-primary">Habibun Nabi Hemel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer • UI/UX Enthusiast • Open Source Contributor
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
            I'm a passionate web developer, creating my unique digital world
            step by step. I'm currently pursuing an undergraduate course in
            engineering while developing websites and playing games in free
            time.
          </p>

          <p className="font-medium mb-3">Connect with me here! ⬇️</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link
              href="https://github.com"
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
              href="https://twitter.com"
              className="text-3xl hover:text-primary transition duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="mailto:your-email@example.com"
              className="text-3xl hover:text-primary transition duration-300"
            >
              <FaMailBulk />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors w-full md:w-auto text-center"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="bg-gray-500 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors w-full md:w-auto text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side: Circular Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/formal_main.png"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full object-cover ring-4 ring-primary shadow-lg h-72 w-72"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
