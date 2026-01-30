"use client";

import Link from "next/link";

export default function ServiceHeroSection() {
  return (
  <section className="pt-16">
  <div className="relative overflow-hidden">
    <div
      className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/tech-service.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-28 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.05] tracking-tight text-white">
            <span className="text-white">Afaq </span>
            <span className="text-primary">Technologies</span>
            <br />
            <span className="text-white">Services</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            Crafting next-gen solutions that solve challenges, scale faster,
            and give your business an edge.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold
                         bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Innovate with Us <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </div>

      {/* fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  </div>
</section>

  );
}
