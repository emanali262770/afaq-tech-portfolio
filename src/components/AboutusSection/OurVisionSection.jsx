import Image from "next/image";

export default function OurVisionSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT: ILLUSTRATION */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px]">
              <Image
                src="/images/vision.png" // 👈 your illustration image
                alt="Our Vision Illustration"
                width={900}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black text-left lg:text-right">
              OUR <span className="text-primary">VISION</span>
            </h2>

            <div className="mt-6 space-y-6 text-sm md:text-base leading-relaxed text-black/80 text-left lg:text-right">
              <p>
                Our vision at{" "}
                <span className="font-semibold text-black">
                  Afaq Technologies
                </span>{" "}
                is to shape the future of businesses through technology that
                doesn’t just keep up with change — it drives it. We see AI,
                cloud, and digital engineering as growth engines that empower
                organizations of every size.
              </p>

              <p>
                We aim to be the partner businesses rely on when they’re ready
                to go beyond limits, rethink what’s possible, and lead with
                confidence in a digital-first world.
              </p>

              <p>
                By blending strategy with innovation, we design solutions that
                outlast trends and outperform expectations — helping startups
                scale faster, enterprises move bolder, and decision-makers turn
                technology into a true competitive advantage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
