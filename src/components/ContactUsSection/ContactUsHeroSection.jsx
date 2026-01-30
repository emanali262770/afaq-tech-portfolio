"use client";

import Link from "next/link";
import React from "react";

const ContactUsHeroSection = () => {
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
            backgroundImage: "url('/images/contact.jpg')",
          }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT (CENTERED) */}
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-28">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.05] tracking-tight text-white">
                  <span className="text-white">
                    Contact <span className="text-primary">us</span>
                  </span>
                </h1>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                  Connect with our experts to turn your ideas into scalable
                  digital solutions that move your business forward.
                </p>
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

export default ContactUsHeroSection;
