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
    <div className="flex h-full flex-col rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm">
      <p className="flex-1 text-gray-300">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
