"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  TrendingUp,
  Search,
  Mail,
  Users,
  Rocket,
  Layout,
  Code,
  ShieldCheck,
  Smartphone,
  Monitor,
  AppWindow,
} from "lucide-react";

const DATA = {
  "digital-marketing": {
    title: { black: "CORE", orange: "EXPERTISE" },
    subtitle:
      "Blending creativity and analytics to fuel digital growth strategies that don’t just look good, they perform.",
    image: "/images/digi.png", // change to your right-side image
    cta: "Get Consultation",
    items: [
      {
        icon: Palette,
        heading: "Brand Identity & Positioning",
        text:
          "Delivering brand and marketing services that create recognition, loyalty, & strong positioning for growth.",
      },
      {
        icon: TrendingUp,
        heading: "Performance Marketing (PPC & Paid Media)",
        text:
          "Affordable PPC services & paid campaigns built to maximize ROI through real-time optimizations.",
      },
      {
        icon: Search,
        heading: "SEO & Content Strategy",
        text:
          "Organic SEO services & content strategy to grow traffic, rankings, & long-term conversions.",
      },
      {
        icon: Mail,
        heading: "Email Marketing Automation",
        text:
          "B2B email marketing that automates nurturing, re-engagement, and revenue-driving journeys.",
      },
      {
        icon: Users,
        heading: "Social Media Marketing",
        text:
          "Social marketing for trust-building communities and measurable leads through consistent content.",
      },
      {
        icon: Rocket,
        heading: "Go-To-Market (GTM) Strategy",
        text:
          "Aligning audience, messaging & channels to launch products with clarity and impact.",
      },
    ],
  },

  "mobile-app-development": {
    title: { black: "CORE", orange: "EXPERTISE" },
    subtitle:
      "Delivering custom mobile application development that fuels engagement, scalability, and growth.",
    image: "/images/mobile.png", // change to your right-side image
    cta: "Get Consultation",
    items: [
      {
        icon: Smartphone,
        heading: "iOS App Development",
        text:
          "Secure, high-performance iOS apps with sleek UX across Apple devices.",
      },
      {
        icon: AppWindow,
        heading: "Android App Development",
        text:
          "Scalable Android apps built for global reach with secure, user-friendly experiences.",
      },
      {
        icon: Code,
        heading: "Cross-Platform (Flutter/React Native)",
        text:
          "Ship faster with one codebase while keeping performance and UX consistent.",
      },
      {
        icon: Layout,
        heading: "Mobile UI/UX & Prototyping",
        text:
          "User-first interfaces, smooth flows, and prototype validation before development.",
      },
      {
        icon: Monitor,
        heading: "Wearable App Development",
        text:
          "Apps for smartwatches & fitness trackers with smooth connections and sync.",
      },
      {
        icon: ShieldCheck,
        heading: "App Performance & Security",
        text:
          "Speed, security, and scalability optimizations to handle real user demand.",
      },
    ],
  },

  "web-development": {
    title: { black: "CORE", orange: "EXPERTISE" },
    subtitle:
      "Building fast, modern websites that improve engagement, boost conversions, and scale with your brand.",
    image: "/images/web.png", // change to your right-side image
    cta: "Get Consultation",
    items: [
      {
        icon: Layout,
        heading: "UI/UX & Web Design",
        text:
          "Modern, conversion-focused layouts with clear structure and strong brand feel.",
      },
      {
        icon: Code,
        heading: "Frontend Development",
        text:
          "High-performance interfaces with modern stacks (Next.js/React) and clean code.",
      },
      {
        icon: Monitor,
        heading: "Backend & APIs",
        text:
          "Secure APIs, admin panels, and scalable backend architecture for real products.",
      },
      {
        icon: Search,
        heading: "SEO & Performance",
        text:
          "Technical SEO, speed optimization, and best practices for rankings and UX.",
      },
      {
        icon: ShieldCheck,
        heading: "Security & Reliability",
        text:
          "Auth, validation, protection, and stable deployments for production traffic.",
      },
      {
        icon: Rocket,
        heading: "Launch & Iteration",
        text:
          "Testing, analytics setup, continuous improvements, and growth-ready roadmap.",
      },
    ],
  },

  "desktop-applications": {
    title: { black: "CORE", orange: "EXPERTISE" },
    subtitle:
      "Building powerful desktop applications that streamline workflows, boost productivity, and scale for teams.",
    image: "/images/desktop.png", // change to your right-side image
    cta: "Get Consultation",
    items: [
      {
        icon: Monitor,
        heading: "Windows Desktop Apps",
        text:
          "Reliable Windows software with smooth UX, secure data, and high performance.",
      },
      {
        icon: AppWindow,
        heading: "macOS Desktop Apps",
        text:
          "Native-like macOS apps with clean UI and strong system integration.",
      },
      {
        icon: Code,
        heading: "Cross-Platform Desktop",
        text:
          "Build once, run anywhere using Electron/Tauri while keeping performance strong.",
      },
      {
        icon: ShieldCheck,
        heading: "Security & Permissions",
        text:
          "Role-based access, encryption, and secure local/cloud storage handling.",
      },
      {
        icon: Layout,
        heading: "UI/UX for Desktop",
        text:
          "Desktop-first flows for productivity, shortcuts, and consistent usability.",
      },
      {
        icon: Rocket,
        heading: "Deployment & Updates",
        text:
          "Installer builds, auto-updates, versioning, and long-term maintenance support.",
      },
    ],
  },
};

export default function CoreExpertiseSection({ slug = "digital-marketing" }) {
  const content = DATA[slug] || DATA["digital-marketing"];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT CARD */}
          <div className="rounded-[36px] bg-white p-8 sm:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-black">{content.title.black} </span>
              <span className="text-primary">{content.title.orange}</span>
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-black/70">
              {content.subtitle}
            </p>

            {/* ITEMS GRID */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {content.items.map((it, idx) => {
                const Icon = it.icon;
                return (
                  <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 aspect-square items-center justify-center rounded-full bg-primary">

                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{it.heading}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-black/60">
                        {it.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black duration-200 transition"
              >
                {content.cta} <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <Image
              src={content.image}
              alt="Core expertise"
              width={900}
              height={700}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
