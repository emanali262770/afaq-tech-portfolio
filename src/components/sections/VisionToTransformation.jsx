"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { tabs } from "./data/visionTransformationData";

export default function VisionToTransformation() {
  const [active, setActive] = useState("ecommerce");

  // ✅ track which tab is expanded (instead of a separate boolean)
  const [expandedTab, setExpandedTab] = useState(null);

  const current = useMemo(
    () => tabs.find((t) => t.key === active) || tabs[0],
    [active]
  );

  // ✅ derived expanded value (no effect needed)
  const expanded = expandedTab === active;

  const visibleParagraphs = expanded
    ? current.paragraphs
    : current.paragraphs.slice(0, 6);

  const showReadMore = current.paragraphs.length > 6;

  const handleTabChange = (key) => {
    setActive(key);
    // no need to setExpanded(false) here because expanded is derived
  };

  const handleToggleExpanded = () => {
    setExpandedTab((prev) => (prev === active ? null : active));
  };

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
                        onClick={() => handleTabChange(t.key)}
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
                        onClick={() => handleTabChange(t.key)}
                        className="group text-left"
                        type="button"
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
                                isActive
                                  ? "w-full"
                                  : "w-0 group-hover:w-full",
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
                    <span className="text-white">
                      {current.accent.split(" ")[0]}{" "}
                    </span>
                    <span className="text-amber-400">
                      {current.accent.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>

                  <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed sm:leading-relaxed text-white/70">
                    {visibleParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* ✅ Read More / Show Less */}
                  {showReadMore ? (
                    <div className="mt-6 sm:mt-8">
                      <button
                        type="button"
                        onClick={handleToggleExpanded}
                        className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:bg-amber-400 transition"
                      >
                        {expanded ? "Show Less" : "Read More"}{" "}
                        <span aria-hidden="true">›</span>
                      </button>
                    </div>
                  ) : null}
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
