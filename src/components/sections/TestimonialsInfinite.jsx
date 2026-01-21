"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "The UI/UX design services they delivered were a game-changer. Customers went from confused to engaged, and their rates skyrocketed.",
    name: "Marcus Lee",
    role: "Head of Product Experience",
    avatar: "/images/user1.png",
    stars: 5,
  },
  {
    id: 2,
    text: "Their IoT product development expertise brought our wearable to life. From prototype to launch, the process was seamless.",
    name: "Laura Smith",
    role: "Innovation Lead",
    avatar: "/images/user2.png",
    stars: 5,
  },
  {
    id: 3,
    text: "With Afaq Technologies Odoo integration, our operations and inventory now run on one connected system—fast and reliable.",
    name: "Ahmed Khan",
    role: "Operations Head",
    avatar: "/images/users3.png",
    stars: 5,
  },
  
];

// Small star component (no extra libs)
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-400"
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="h-full w-[320px] sm:w-[420px] lg:w-[520px] rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] px-6 py-6 sm:px-8 sm:py-7">
      <Stars count={t.stars} />

      <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-zinc-700">
        {t.text}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white shadow">
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>

        <div className="leading-tight">
          <div className="font-semibold text-zinc-900">{t.name}</div>
          <div className="text-sm text-zinc-500">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsInfinite() {
  // duplicate list for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            WHAT THEY SAY <span className="text-primary">ABOUT US</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-500">
            Built a seamless experience for them, what are you <br className="hidden sm:block" />
            waiting for?
          </p>
        </div>

        {/* Scroller */}
        <div className="relative mt-12">
          {/* soft fade edges like screenshot */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            {/* track */}
            <div className="marquee group flex w-max gap-8 py-2">
              {items.map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="shrink-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
         
        </div>
      </div>

      {/* CSS for infinite marquee + pause on hover */}
      <style jsx>{`
        .marquee {
          animation: scroll 28s linear infinite;
        }
        .group:hover .marquee {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
