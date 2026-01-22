"use client";

import Link from "next/link";
import {
  Building2,
  Hotel,
  Scale,
  GraduationCap,
  Banknote,
  HeartPulse,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

const items = [
  { title: "Real Estate", slug: "real-estate", icon: Building2 },
  { title: "Education & E-learning", slug: "education-e-learning", icon: GraduationCap },
  { title: "Healthcare", slug: "healthcare", icon: HeartPulse },
  { title: "Ecommerce", slug: "ecommerce", icon: ShoppingBag },
  
];

export default function CaseStudyIndustriesGrid() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.slug}
                href={`/case-studies/${it.slug}`}
                className="
                  rounded-[22px]
                  bg-white
                  px-6 py-10
                  text-center
                  shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                  ring-1 ring-black/5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]
                "
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center">
                  <Icon className="h-14 w-14 text-primary" strokeWidth={1.7} />
                </div>

                <p className="mt-5 text-sm font-semibold text-black">
                  {it.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
