"use client";

import Link from "next/link";
import {
  Brain,
  Cpu,
  Code,
  Package,
  Smartphone,
  Globe,
  Users,
  Megaphone,
  BarChart3,
} from "lucide-react";
const services = [
  {
    slug: "web-development",
    icon: Globe,
    title1: "WEB",
    title2: "DEVELOPMENT",
    desc:
      "Custom web development services delivering fast, scalable, and conversion-focused websites tailored to your business goals.",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title1: "MOBILE APP",
    title2: "DEVELOPMENT",
    desc:
      "End-to-end mobile app development for iOS and Android, building secure, high-performance, and user-friendly applications.",
  },
  {
    slug: "digital-marketing",
    icon: Package,
    title1: "DIGITAL",
    title2: "MARKETING",
    desc:
      "Data-driven digital marketing solutions including SEO, paid ads, and social media strategies to grow visibility and revenue.",
  },
  {
    slug: "desktop-applications",
    icon: Code,
    title1: "DESKTOP",
    title2: "APPLICATIONS",
    desc:
      "Custom desktop application development for Windows and macOS with reliable performance, security, and scalability.",
  },
];



export default function SevicesCardSection() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-[98rem] px-4 sm:px-6 lg:px-8 py-20">
        {/* ===== Heading ===== */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Afaq Technologies <span className="text-primary">SERVICES</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[var(--text-muted)]">
            Future-ready tech & digital solutions built to scale
            <br className="hidden sm:block" />
            with your business.
          </p>
        </div>

        {/* ===== Cards Grid (same gap + layout) ===== */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title1 + s.title2}
                className="
                  rounded-[24px]
                  border border-[#E5E7EB]
                  bg-[#FFFEFB]
                  px-10 py-12
                  text-center
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-blue-50
                  cursor-pointer
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                "
              >
                {/* Icon (same box + size) */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-extrabold tracking-wide text-foreground">
                  {s.title1}
                  <br />
                  <span className="text-primary">{s.title2}</span>
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {s.desc}
                </p>

                {/* Learn more (same underline animation) */}
                <Link
                  href={`/services/${s.slug}`}
                  className="
                    relative mt-8 inline-block text-sm font-medium text-foreground
                    transition-colors duration-300 hover:text-primary
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-primary
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  Learn more
                </Link>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
