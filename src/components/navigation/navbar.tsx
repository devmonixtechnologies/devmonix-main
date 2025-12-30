'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/utils';
import { cn } from '@/utils';

const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ================= FLOATING NAV ================= */}
      <div className="fixed top-4 inset-x-0 z-[9999] flex justify-center px-4">
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className={cn(
            'pointer-events-auto flex items-center justify-between gap-6',
            'rounded-full border backdrop-blur-xl transition-all duration-300 w-full',
            scrolled
              ? 'bg-neutral-900/85 border-neutral-800 px-5 py-2 shadow-xl max-w-5xl'
              : 'bg-neutral-900/65 border-neutral-700 px-6 py-3 max-w-6xl'
          )}
        >
          {/* LOGO */}
          <Link href="/" className="font-bold text-sm tracking-wide text-white">
            {/* DEVMONIX<span className="text-violet-500"></span> */}
             DEVMONIX TECHNOLOGIES ™
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold rounded-full text-neutral-300
                           hover:bg-neutral-800 hover:text-white transition flex items-center gap-1"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="px-3 py-2 text-xs font-bold rounded-full
                         border border-violet-500 to-violet-500 hover:bg-violet-500 hover:text-white
                         text-violet-500 transition"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-full bg-neutral-800 text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-4 h-4" />
          </button>
        </motion.header>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28 }}
              className="fixed top-4 right-4 bottom-4 w-[320px] z-[9999]
                         rounded-3xl bg-neutral-900 border border-neutral-800
                         p-6 flex flex-col"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-white">
                  DEVMONIX<span className="text-violet-500">.</span>
                </span>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-5 h-5 text-neutral-400" />
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex-1 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl
                               font-semibold text-neutral-200
                               hover:bg-neutral-800 transition"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="pt-6 border-t border-neutral-800">
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 rounded-xl
                             bg-violet-600 hover:bg-violet-500
                             text-white font-bold transition"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;


















