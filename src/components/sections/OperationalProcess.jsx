"use client";

import Link from "next/link";
import Image from "next/image";

export default function OperationalProcess() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[100rem] px-6 sm:px-6 lg:px-8">
        {/* ===== Heading ===== */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            OPERATIONAL <span className="text-primary">PROCESS</span>
          </h2>
        </div>

        {/* ===== Content ===== */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          {/* Left text */}
          <div>
            <p className="text-2xl font-extrabold tracking-wide text-primary">
              DELIVERING IMPACT WITH Afaq WORKFLOW
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)]">
              Our process is agile, transparent, and outcome-focused. Every step
              aligns with your business goals through custom software
              development services. We co-create solutions that bring your
              vision to life, adapt quickly, and keep you engaged at every
              stage.
            </p>

            <ul className="mt-6 space-y-3 text-[15px] leading-7 text-foreground">
              {[
                "We dig deep into your challenges and goals before writing a single line of code.",
                "A clear, actionable blueprint that transforms visions into a measurable success story.",
                "Designing experiences your users will love.",
                "Full cycle software development expertise for clean scalable & future-proof solutions.",
                "Every feature is tested, automated, and validated to ensure reliability before launch.",
                "Go live with confidence, stay secure, and scale without disruption.",
                "We monitor, maintain, and enhance your product to keep it fast, reliable, and competitive.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground/90 font-semibold">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary transition"
              >
                View Services <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          {/* Right side IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/images/opration.png"   // <-- change to your image path
                alt="Operational process"
                width={900}                              // <-- put your real image width
                height={700}                             // <-- put your real image height
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
