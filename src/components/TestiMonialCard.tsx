'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

export default function TestiMonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-[40rem]  w-full dark:bg-black dark:bg-grid-white[0.2] relative flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10"> Hear our Harmoniyal :Voice of Success</h2>
      <div className="flex justify-center w-full overflow-px-4 sm:px-6 lg:px-8 -hidden">
        <div>
          <InfiniteMovingCards
            items={TestiMonialCard}
            direction="right"
            speed="slow"
          />
        </div>

      </div>

    </div >
  )
}
