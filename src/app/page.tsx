import HereSection from "@/component/HereSection";
import FeatureCourses from "@/component/FeatureCourses";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HereSection />
      <FeatureCourses />
    </main>
  );
}
