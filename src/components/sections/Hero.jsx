"use client";

import Link from "next/link";



export default function Hero() {
  return (
  <section className="pt-16">
  <div className="relative overflow-hidden">
    {/* BACKGROUND IMAGE CONTAINER */}
    <div
      className="
        relative
        min-h-[70vh] md:min-h-[70vh]
        py-16 sm:py-20 md:py-24
        flex items-center
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/images/1.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className=" max-w-[95rem] px-6 md:px-24 ">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.3] tracking-tight text-white">
              <span className="text-primary">Afaq Technologies</span> Delivering
              Scalable &amp; Secure <br className="hidden sm:block" />
              <span className="text-primary">Full-Cycle Software Development</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Unlock growth with custom development solutions for your business,
              powered by AI &amp; cloud innovation.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
                       bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                Contact Us <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          {/* ✅ Remove this spacer (ye bhi layout ko push karta hai) */}
          {/* <div className="hidden lg:block h-[420px]" /> */}
        </div>
      </div>

      {/* FADE EDGES */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  </div>
</section>

  );
}
