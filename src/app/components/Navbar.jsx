"use client";

import React, { useState } from "react";
import { FaBars, FaShieldAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", text: "About Us" },
  { href: "/services", text: "Services" },
  { href: "/process", text: "Process" },
  { href: "/faq", text: "FAQs" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ink to-slate-800">
            <FaShieldAlt className="text-xl text-accent" />
          </span>
          <span className="flex flex-col">
            <span className="text-xl font-black leading-none tracking-tight text-ink">Provenix</span>
            <span className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-400">
              Intelligence
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-bold uppercase tracking-[0.12em] transition ${
                  active ? "text-accent" : "text-slate-700 hover:text-accent"
                }`}
              >
                {link.text}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-accent transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Free consultation
          </Link>
        </div>

        <button
          type="button"
          className="text-ink lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-700 hover:bg-slate-50 hover:text-accent"
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 block rounded-full bg-accent px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white"
          >
            Free consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
