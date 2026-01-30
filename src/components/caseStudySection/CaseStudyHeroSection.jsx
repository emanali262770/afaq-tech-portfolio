"use client";

import Link from "next/link";

const CaseStudyHeroSection = ({ title = "Case Studies", Icon }) => {
  return (
    <section className="pt-16">
      <div className="relative overflow-hidden">
        <div
          className="
            relative
            min-h-[70vh] md:min-h-[70vh]
            flex items-center justify-center
            bg-cover bg-center bg-no-repeat
          "
          style={{ backgroundImage: "url('/images/case-bg.jpg')" }}
        >
          {/* ✅ DARK OVERLAY (same as other heroes) */}
          <div className="absolute inset-0 bg-black/30" />

          {/* ✅ CENTER CONTENT (NO OVERFLOW) */}
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-28">
              <div className="mx-auto max-w-3xl text-center">
                {/* ✅ Icon only on detail page */}
                {Icon ? (
                  <div className="mb-6 flex justify-center">
                    <Icon className="h-20 w-20 text-primary" strokeWidth={1.6} />
                  </div>
                ) : null}

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.05] tracking-tight text-white">
                  {Icon ? (
                    <span className="text-white">{title}</span>
                  ) : (
                    <>
                      <span className="text-white">Afaq </span>
                      <span className="text-primary">Technologies</span>
                      <br className="hidden sm:block" />
                      <span className="text-primary">{title}</span>
                    </>
                  )}
                </h1>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                  We help you scale smarter with systems, strategies, and solutions
                  that don’t slow down.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
                           bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    Innovate with Us <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>

              {/* (Same approach as your fixed hero: no spacer pushing content down) */}
              {/* <div className="hidden lg:block h-[420px]" /> */}
            </div>
          </div>

          {/* ✅ DARK fades (same as other heroes) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeroSection;

