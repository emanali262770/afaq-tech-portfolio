"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✅ active checks (sub routes bhi cover)
  const isHome = pathname === "/";
  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  const isCaseStudies =
    pathname === "/case-studies" || pathname.startsWith("/case-studies/");
  const isAbout = pathname === "/about-us" || pathname.startsWith("/about-us/");

  const linkClass = (active) =>
    `px-4 py-2 rounded-full text-sm font-medium transition ${
      active
        ? "bg-primary text-primary-foreground"
        : "text-[var(--text-muted)] hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
     <div className="lg:bg-white/40 backdrop-blur-xl border-b border-white/40">

        <div className="w-full px-6 lg:px-28">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-14 w-14 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Afaq Technologies Logo"
                  width={72}
                  height={52}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-3">
              <Link href="/" className={linkClass(isHome)}>
                Home
              </Link>

              <Link href="/services" className={linkClass(isServices)}>
                Services
              </Link>

              <Link href="/case-studies" className={linkClass(isCaseStudies)}>
                Case Studies
              </Link>

              <Link href="/about-us" className={linkClass(isAbout)}>
                About Us
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact-us"
                className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold
                           bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                GET FREE CONSULTATION
              </Link>

              {/* Mobile Hamburger */}
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/80 hover:bg-white transition"
              >
                <div className="grid gap-1.5">
                  <span
                    className={`h-0.5 w-5 bg-[var(--text)] transition ${
                      open ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-[var(--text)] transition ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-[var(--text)] transition ${
                      open ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 pt-2">
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white/80 p-4">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={linkClass(isServices)}
                >
                  Services
                </Link>

                <Link
                  href="/case-studies"
                  onClick={() => setOpen(false)}
                  className={linkClass(isCaseStudies)}
                >
                  Case Studies
                </Link>

                <Link
                  href="/about-us"
                  onClick={() => setOpen(false)}
                  className={linkClass(isAbout)}
                >
                  About Us
                </Link>

                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  GET FREE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
