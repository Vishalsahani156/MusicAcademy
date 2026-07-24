'use client'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

export default function TestiMonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-left">
      <p className="text-sm leading-relaxed text-gray-200">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-sm font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-teal-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
