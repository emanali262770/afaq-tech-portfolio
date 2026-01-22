import Link from "next/link";

const CaseStudyHeroSection = ({ title = "Case Studies", Icon }) => {
  return (
    <section className="pt-24">
      <div className="relative overflow-hidden">
        <div
          className="h-[50vh] flex items-start bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        >
          <div className="relative z-10 w-full pt-12 flex items-center justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-28">
              <div className="mx-auto max-w-3xl text-center">
                {/* ✅ Icon only on detail page */}
                {Icon ? (
                  <div className="mb-6 flex justify-center">
                    <Icon className="h-20 w-20 text-primary" strokeWidth={1.6} />
                  </div>
                ) : null}

                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
                  {Icon ? (
                    <span className="text-foreground">{title}</span>
                  ) : (
                    <>
                      <span className="text-foreground">Afaq </span>
                      <span className="text-primary">Technologies</span>
                      <br />
                      <span className="text-primary">{title}</span>
                    </>
                  )}
                </h1>

                <p className="mt-5 text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                  We help you scale smarter with systems, strategies, and solutions that don’t slow down.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <Link
                    href="#launch"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    Innovate with Us <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block h-[420px]" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeroSection;
