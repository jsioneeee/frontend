"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Hobbies", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Certificates", href: "/certificates" },
  ];

  return (
    <>
      <header className="bg-[#DEE0D9] shadow-md h-[80px] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between h-full">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/">
              <img
                src="/logo-2.png"
                alt="My Logo"
                className="w-[15vw] max-w-[160px] min-w-[100px] h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-80 hover:shadow-none"
              />
            </Link>
          </div>

          {/* Right: Nav + Hamburger */}
          <div className="flex-1 flex justify-end items-center">
            {/* Hamburger */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 ml-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-[#777C6D] transition duration-300 hover:scale-105 hover:shadow-md"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-[#9F00FF]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm font-medium text-white bg-[#777C6D] rounded-md hover:bg-[#5f6655] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
