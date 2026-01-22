import Link from "next/link";
import React from "react";

const DetailServicesPage = ({ data }) => {
  return (
    <section className="pt-24">
      <div className="relative overflow-hidden">
        {/* ✅ BACKGROUND IMAGE CONTAINER */}
        <div
          className="h-[70vh] flex items-start bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
        >
          {/* ✅ CENTER-ALIGNED CONTAINER */}
          <div className="relative z-10 w-full pt-12 flex items-center justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-28">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
                  <span className="text-foreground">{data.titleBlack} </span>
                  <span className="text-primary">{data.titleOrange}</span>{" "}
                  <span className="text-foreground">{data.titleBlack2}</span>
                  <br />
                  <span className="text-primary">{data.titleOrange2}</span>
                  {data.byText ? (
                    <>
                      {" "}
                      <span className="text-foreground">{data.byText} </span>
                      <span className="text-primary">{data.brand}</span>
                    </>
                  ) : null}
                </h1>

                <p className="mt-5 text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                  {data.desc}
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <Link
                    href="#launch"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    {data.cta} <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block h-[420px]" />
            </div>
          </div>

          {/* fades (UNCHANGED) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default DetailServicesPage;
