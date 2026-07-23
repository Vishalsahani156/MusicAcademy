'use client'
import TestiMonialCard from "@/components/TestiMonialCard"
import testimonialsData from "@/data/testimonials.json"

export default function MusicSchoolTestiMonials() {
  const testimonials = testimonialsData.testimonials
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          What our students say
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestiMonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  )
}
