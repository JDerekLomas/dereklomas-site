"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Publications" },
  { href: "/students", label: "Students" },
  { href: "/writing", label: "Writing" },
  { href: "/talks", label: "Talks" },
  { href: "/lab", label: "Lab" },
  { href: "/press", label: "Press" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/75 backdrop-blur-md print:hidden">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-medium text-primary no-underline">
            Derek Lomas
          </Link>

          <div className="hidden lg:flex items-center gap-7 font-sans text-sm">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`no-underline underline-offset-4 transition-colors ${
                      isActive(item.href)
                        ? "text-primary underline decoration-[var(--text-primary)]"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="no-underline border border-[var(--border-medium)] text-secondary px-4 py-2 hover:border-[var(--text-primary)] hover:text-primary transition-colors"
            >
              Contact me
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 pb-4 space-y-4 font-sans text-base border-t border-light pt-4">
            {[...navItems, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block no-underline transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
