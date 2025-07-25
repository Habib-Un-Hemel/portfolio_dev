"use client"; // This is a client component but by default it is a server component in Next.js

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  //   const theme = "dark"; // Replace with your theme logic
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/highlights", label: "Highlights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#f0f2f5]/80 dark:bg-[#37514f]/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container max-w-7xl mx-auto px-4">
        {/* For Desktop menu items  */}

        <div className="flex items-center justify-between h-16">
          {/* <Link href="/" className="text-xl font-bold text-primary">
            {/* Hemel.Portfolio&trade; */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-primary text-4xl">Hemel</span>
            <span className=" text-xl">.INTP</span>
          </Link>

          {/* Desktop menus  */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              className="p-2 rounded-lg hover:bg-[#e0f0ef] dark:text-white dark:hover:bg-[#37514f] hover:text-primary transition-colors cursor-pointer"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-[#e0f0ef] dark:hover:bg-[#37514f] transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => {
                return (
                  <div key={index} onClick={toggleMobileMenu}>
                    <Link
                      href={item.href}
                      className={`text-white hover:text-primary ${
                        pathname === item.href ? "text-primary" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}

              <div>
                <button
                  className="flex items-center py-2 rounded-lg hover:text-primary transition-colors"
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-6 h-6 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-6 h-6 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
