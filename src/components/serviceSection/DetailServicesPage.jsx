"use client";

import Link from "next/link";
import React from "react";

const DetailServicesPage = ({ data }) => {
  return (
    <section className="pt-16">
      <div className="relative overflow-hidden">
        {/* BACKGROUND IMAGE CONTAINER */}
        <div
          className="
            relative
            min-h-[70vh] md:min-h-[70vh]
            flex items-center justify-center
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: "url('/images/tech-service.jpg')",
          }}
        >
          {/* DARK OVERLAY (same as Hero) */}
          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT (CENTERED) */}
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-28">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.05] tracking-tight text-white">
                  <span className="text-white">{data.titleBlack} </span>
                  <span className="text-primary">{data.titleOrange}</span>{" "}
                  <span className="text-white">{data.titleBlack2}</span>
                  <br className="hidden sm:block" />
                  <span className="text-primary">{data.titleOrange2}</span>

                  {data.byText ? (
                    <>
                      {" "}
                      <span className="text-white">{data.byText} </span>
                      <span className="text-primary">{data.brand}</span>
                    </>
                  ) : null}
                </h1>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                  {data.desc}
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
                           bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    {data.cta} <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FADE EDGES */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default DetailServicesPage;
