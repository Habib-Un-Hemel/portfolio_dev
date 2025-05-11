import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/formal_main.png" // Ensure this image is high resolution
            alt="profile image"
            width={200} // Increased size for better visibility
            height={200} // Corresponding height
            className="rounded-full mb-4 h-40 w-40 object-cover ring-4 ring-primary shadow-lg" // Added larger size, ring, and shadow
            quality={100} // Ensures high image quality
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {/* <Link
            href="https://github.com"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://github.com"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://github.com"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://github.com"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaGithub />
          </Link> */}
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

        {/* buttons - two */}

        <div className="flex  flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg  hover:bg-primary/80 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-gray-800 px-8 py-3 rounded-lg  hover:bg-gray-300 transition-colors "
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
