import Image from "next/image";

export default function OurMissionSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              OUR <span className="text-primary">MISSION</span>
            </h2>

            <div className="mt-6 space-y-6 text-sm md:text-base leading-relaxed text-black/80">
              <p>
                At <span className="font-semibold text-black">Afaq Technologies</span>, our mission
                is to build next-gen digital solutions that help businesses move faster, scale
                smarter, and stay ahead of the competition.
              </p>

              <p>
                We don’t just deliver projects — we partner with you to design reliable systems,
                craft winning strategies, and ship products that create measurable impact. From
                startups to growing enterprises, we build technology that is clean, secure, and
                ready for the future.
              </p>

              <p>
                Our focus is simple: quality engineering, clear communication, and on-time delivery.
                We believe great technology should unlock growth, improve efficiency, and create
                long-term value — because your success is the result we care about most.
              </p>
            </div>
          </div>

          {/* RIGHT: ILLUSTRATION */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <Image
                src="/images/mission.png" // ✅ put your illustration here
                alt="Our Mission Illustration"
                width={900}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
