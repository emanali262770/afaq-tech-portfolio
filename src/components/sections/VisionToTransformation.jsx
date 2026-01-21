"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
    {
        key: "ecommerce",
        label: "E-Commerce",
        accent: "RETAIL TECH SUCCESS",
        // replace with your real images in /public/images/
        image: "/images/ecom.png",
        paragraphs: [
            "Afaq Technologies partnered with a luxury leather brand to deliver next-generation retail & ecommerce software development that combined elegance with performance. Through custom software development for retail industry, the platform offered role-specific workflows for payments, inventory, and customer engagement.",
            "Using custom retail software development solutions, advanced analytics tracked behavior and sales trends, while personalization features boosted conversions. A premium ecommerce software solution development strategy enabled multi-currency transactions and global reach.",
            "Backed by expertise as an ecommerce software development company, the project ensured robust checkout, product customization, and secure transactions. With scalable ecommerce software development and reliable retail software development service, the result was a global-ready platform powered by innovative retail software development practices.",
        ],
    },
    {
        key: "finance",
        label: "Finance",
        accent: "FINTECH GATEWAY BUILD",
        image: "/images/fin.png",
        paragraphs: [
            "Afaq Technologies partnered with a client to deliver advanced custom fintech software development by creating a Zoho Marketplace extension for a payment gateway.",
            "A skilled team built the solution to process secure transactions within Zoho Books, Invoice, and Subscriptions. The extension enabled multi-currency payments and accurate reconciliation.",
            "With expertise in fintech and financial software development services, the platform ensured compliance, scalability, and reliability—showcasing the value of custom financial software development.",
        ],
    },
    {
        key: "healthcare",
        label: "Healthcare",
        accent: "HEALTHTECH EVOLUTION",
        image: "/images/health.png",
        paragraphs: [
            "Afaq Technologies partnered with a consultancy to deliver a modern ecosystem powered by healthcare solutions development and advanced healthcare software development services.",
            "The project introduced approvals, promotions logic, and multi-level access—supporting scalability and efficient updates.",
            "Secure integrations and a future-ready platform improved accuracy, reliability, and long-term growth.",
        ],
    },
    {
        key: "realestate",
        label: "Real Estate",
        accent: "SMART REALTY GROWTH",
        image: "/images/real.png",
        paragraphs: [
            "We transformed a real estate workflow with role-based dashboards and flexible subscriptions for Brokers, Buyers, and Owners.",
            "Centralized customer data improved team productivity and targeted marketing.",
            "The outcome was a strong proptech ecosystem supporting sustainable operations and long-term success.",
        ],
    },
    {
        key: "law",
        label: "Law & Legal",
        accent: "LEGAL TECH UPGRADE",
        image: "/images/law.png",
        paragraphs: [
            "We modernized legal operations with centralized intake, documents, communication, and case references.",
            "Integrated tools enabled unified workflows and improved efficiency across teams.",
            "A scalable, future-ready digital ecosystem delivered better client experience and record keeping.",
        ],
    },
    {
        key: "hospitality",
        label: "Hospitality & Tourism",
        accent: "HOSPITALITY TECH RISE",
        image: "/images/tour.png",
        paragraphs: [
            "We delivered innovative hospitality software that modernized bookings, memberships, and guest communication.",
            "Automation reduced manual work while personalization improved guest satisfaction.",
            "Secure data handling and global scalability created a future-ready ecosystem for travel brands.",
        ],
    },
    {
        key: "startups",
        label: "Startups & Scaleups",
        accent: "STARTUP SALES ENGINE",
        image: "/images/start.png",
        paragraphs: [
            "We delivered a robust lead and quote system bringing lead capture, quotes, and integrations together.",
            "Real-time sync improved automation across contracts, invoices, and payments.",
            "A scalable solution improved productivity, accuracy, and operational efficiency.",
        ],
    },
    {
        key: "education",
        label: "Education & E-learning",
        accent: "EDTECH CRM SUCCESS",
        image: "/images/edu.png",
        paragraphs: [
            "We implemented a centralized CRM + marketing automation system for better lead capture and engagement.",
            "Role-based dashboards improved visibility into performance and operations.",
            "An AI-powered revenue engine reduced manual work and accelerated growth.",
        ],
    },
];

export default function VisionToTransformation() {
    const [active, setActive] = useState("ecommerce");

    const current = useMemo(
        () => tabs.find((t) => t.key === active) || tabs[0],
        [active]
    );

    return (
        <section id="images" className="relative py-12 sm:py-16 md:py-20">
            {/* ===== Background Image ===== */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/banner2.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
                {/* ===== Glass Panel ===== */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                    {/* ===== Title ===== */}
                    <div className="px-4 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-14">
                        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white px-2">
                            FROM VISION TO{" "}
                            <span className="text-amber-400">TRANSFORMATION</span>
                        </h2>
                    </div>

                    {/* ===== Content ===== */}
                    <div className="px-4 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-14 lg:pt-10">
                        <div className="flex flex-col gap-8 lg:gap-10 lg:grid lg:grid-cols-[260px_1fr]">
                            {/* Left Tabs */}
                            <div className="relative">
                                {/* Mobile: horizontal scroll tabs */}
                                <div className="flex gap-2 overflow-x-auto pb-3 lg:hidden">
                                    {tabs.map((t) => {
                                        const isActive = t.key === active;
                                        return (
                                            <button
                                                key={t.key}
                                                onClick={() => setActive(t.key)}
                                                className={[
                                                    "shrink-0 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-semibold transition whitespace-nowrap",
                                                    isActive
                                                        ? "border-amber-400/60 bg-amber-400/15 text-white"
                                                        : "border-white/15 bg-white/5 text-white/70 hover:text-white",
                                                ].join(" ")}
                                            >
                                                {t.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Desktop: vertical list */}
                                <div className="hidden lg:flex flex-col gap-4 lg:gap-5 pr-8 lg:pr-10">
                                    {tabs.map((t) => {
                                        const isActive = t.key === active;
                                        return (
                                            <button
                                                key={t.key}
                                                onClick={() => setActive(t.key)}
                                                className="group text-left"
                                            >
                                                <div
                                                    className={[
                                                        "inline-flex items-center gap-3 text-sm lg:text-base font-semibold transition",
                                                        isActive
                                                            ? "text-white"
                                                            : "text-white/70 hover:text-white",
                                                    ].join(" ")}
                                                >
                                                    <span className="relative">
                                                        {t.label}
                                                        {/* underline like your screenshot */}
                                                        <span
                                                            className={[
                                                                "absolute -bottom-1 left-0 h-[2px] transition-all",
                                                                "bg-gradient-to-r from-amber-400 via-amber-300 to-white/80",
                                                                isActive ? "w-full" : "w-0 group-hover:w-full",
                                                            ].join(" ")}
                                                        />

                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* vertical line (desktop) */}
                                <div className="hidden lg:block absolute right-4 top-2 bottom-2 w-px bg-white/20" />
                            </div>

                            {/* Right Content */}
                            <div className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[1fr] xl:grid-cols-[360px_1fr] items-start">
                                {/* Image block */}
                                <div className="relative order-2 lg:order-1">
                                    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black/20 ring-1 ring-white/10">
                                        <Image
                                            src={current.image}
                                            alt={current.label}
                                            width={300}
                                            height={400}
                                            className="w-full h-auto object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Text block */}
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
                                        <span className="text-white">{current.accent.split(" ")[0]} </span>
                                        <span className="text-amber-400">
                                            {current.accent.split(" ").slice(1).join(" ")}
                                        </span>
                                    </h3>

                                    <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed sm:leading-relaxed text-white/70">
                                        {current.paragraphs.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>

                                    <div className="mt-6 sm:mt-8">
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:bg-amber-400 transition"
                                        >
                                            Read More <span aria-hidden="true">›</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom fade */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
            </div>
        </section>
    );
}