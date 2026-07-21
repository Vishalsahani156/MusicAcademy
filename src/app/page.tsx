export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section className="relative flex flex-col items-center justify-center px-4 pt-40 text-center">
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          Master Your Music
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-400">
          World-class music education for every level. Learn from professional
          musicians and take your skills to the next level.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="/courses"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Browse Courses
          </a>
          <a
            href="/contact"
            className="rounded-full border border-neutral-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section className="mx-auto mt-40 max-w-6xl px-4 pb-40">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Expert Instructors",
              desc: "Learn from Grammy-winning musicians and conservatory professors with decades of stage and studio experience.",
            },
            {
              title: "Flexible Learning",
              desc: "Choose from live one-on-one sessions, group classes, or self-paced courses that fit your schedule.",
            },
            {
              title: "All Instruments",
              desc: "From piano and guitar to violin, drums, and voice — we offer instruction across every major instrument.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="leading-relaxed text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-40 text-center">
        <h2 className="mb-12 text-3xl font-semibold text-white">
          What Our Students Say
        </h2>
        <div className="space-y-8">
          {[
            "Every note you play brings you closer to your dreams. Learn, practice, and perform with confidence—your musical journey starts here.",
            "Unlock your musical talent with expert guidance. Turn passion into performance and let every melody inspire your future.",
            "Music is the language of the soul. Join our academy, master every note, and let your talent shine on every stage.",
            "Dream big, play boldly, and create unforgettable melodies. Your passion for music deserves the perfect place to grow.",
            "From your first note to your grand performance, we're here to help you discover your true musical potential every step of the way.",
          ].map((quote) => (
            <p
              key={quote}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-lg leading-relaxed text-neutral-300 italic"
            >
              "{quote}"
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
