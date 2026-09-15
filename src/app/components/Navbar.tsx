"use client"; // This is a client component but by default it is a server component in Next.js

import React, { useState, useEffect, useCallback } from "react";
import {
  SunIcon,
  MoonIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#highlights", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Track which section is currently in view to highlight the matching nav item
  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
        setActiveSection(id);
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  return (
    <nav className="fixed w-full bg-[#f0f2f5]/80 dark:bg-[#37514f]/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container max-w-7xl mx-auto px-4">
        {/* For Desktop menu items  */}

        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-bold"
          >
            <span className="text-primary text-4xl">Hemel</span>
            <span className=" text-xl">.INTP</span>
          </a>

          {/* Desktop menus  */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </a>
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
                const isActive = activeSection === item.href.slice(1);
                return (
                  <div key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block text-white hover:text-primary ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {item.label}
                    </a>
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
