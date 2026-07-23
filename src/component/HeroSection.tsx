import Spotlight from "../ui/Spotlight";
import Link from "next/link";
import { Button } from "../ui/moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[400rem] w-full rounded-md flex-col items-center justify-content relative overflow-hidden max-auto py-10 md:-0">
            <div className="p-4 relative z-10 w-full text-center">
                 <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
                <h1>Msster the art of the  music</h1>
                <p>Every note you play brings you closer to your dreams. Learn, practice, and perform with confidence—your musical journey starts here."
                    "Unlock your musical talent with expert guidance. Turn passion into performance and let every melody inspire your future."
                    "Music is the language of the soul. Join our academy, master every note, and let your talent shine on every stage."
                    "Dream big, play boldly, and create unforgettable melodies. Your passion for music deserves the perfect place to grow."
                    **"From your first note to your grand performance, we're here to help you discover your true musical potential every step of the way."Every note you play brings you closer to your dreams. Learn, practice, and perform with confidence—your musical journey starts here."
                    r first note to your grand performance, we're here to help you discover your true musical potential every step of the way."</p>
                    <div className="mt-4">
                        <Link href={"/courses"}>
                        <Button borderRadius="1.75rem"className="bg-black text-white border-neutral-200 dark:border-slate-800">
                            Explore courses
                        </Button>
                        </Link>
                    </div>
            </div>

        </div>
    )
}