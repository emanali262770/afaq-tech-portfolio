import Image from "next/image";
import Link from "next/link";

export default function CaseStudyDetailSection({ data }) {
    return (
        <section className="bg-white pb-24">
            <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
                {/* Top dark bar */}
                <div className="mt-12 overflow-hidden rounded-[18px] bg-[#3f3f3f]">
                    <div className="py-5 text-center text-xs font-semibold tracking-[0.22em] text-white">
                        {data.topBar}
                    </div>

                    {/* Main white body */}
                    <div className="bg-white px-6 py-14 sm:px-10 lg:px-16">
                        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
                            {/* ================= LEFT IMAGE AREA ================= */}
                            <div className="flex justify-center lg:justify-start">
                                {/* Big background card */}
                                <div className="relative w-full max-w-[520px]">
                                    <div className="relative mx-auto w-full max-w-[360px] overflow-hidden">
                                        <Image
                                            src={data.images[0]}
                                            alt="Case study screenshot"
                                            width={1200}
                                            height={1600}
                                            quality={100}
                                            className="w-full h-auto object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* ================= RIGHT CONTENT ================= */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                                    {data.headingBlack}{" "}
                                    <span className="text-primary">{data.headingOrange}</span>
                                </h2>

                                {/* Introduction */}
                                <h3 className="mt-8 text-lg font-extrabold text-black">
                                    Introduction
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-black/70">
                                    {data.introduction}
                                </p>

                                {/* Challenge */}
                                <h3 className="mt-10 text-lg font-extrabold text-black">
                                    The Challenge
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-black/70">
                                    {data.challengeIntro}
                                </p>

                                <ul className="mt-6 space-y-4">
                                    {data.challengePoints.map((point, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                                            <span className="text-sm leading-relaxed text-black/80">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="mt-10">
                                    <Link
                                        href={data.ctaHref || "/contact-us"}
                                        className="
                      inline-flex items-center gap-2
                      rounded-full
                      bg-primary
                      px-7 py-3
                      text-sm font-semibold text-white
                      hover:opacity-90
                      transition
                    "
                                    >
                                        {data.ctaText} <span aria-hidden="true">›</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ================= BOTTOM CONTENT ================= */}
                        <div className="mt-20">
                            <h3 className="text-xl font-extrabold text-black">
                                The Afaq Technologies Solution
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-black/70">
                                {data.solutionIntro}
                            </p>

                            <ul className="mt-6 space-y-4">
                                {data.solutionPoints.map((point, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed text-black/80">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-14 text-xl font-extrabold text-black">
                                Execution and Results
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-black/70">
                                {data.resultsIntro}
                            </p>

                            <ul className="mt-6 space-y-4">
                                {data.resultsPoints.map((point, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed text-black/80">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {data.finalResult && (
                                <p className="mt-8 text-sm text-black/80">
                                    <span className="font-bold text-black">Result:</span>{" "}
                                    {data.finalResult}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
