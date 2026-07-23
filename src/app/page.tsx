import HereSection from "@/component/HereSection";
import FeatureCourses from "@/component/FeatureCourses";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HereSection>
        <h1 className="text-3xl font-bold underline text-white">
          Welcome to the Music Academy
        </h1>
      </HereSection>
      <FeatureCourses />
    </main>
  );
}
