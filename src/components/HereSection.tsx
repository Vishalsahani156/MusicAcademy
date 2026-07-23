import Spotlight from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function HereSection() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-20 md:h-[40rem] md:py-0">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 mx-auto w-full max-w-3xl p-4 text-center">
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          Master the art of music
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300">
          Every note you play brings you closer to your dreams. Learn, practice,
          and perform with confidence—your musical journey starts here.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="border-neutral-200 bg-black text-white dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
