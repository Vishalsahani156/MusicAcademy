import HereSection from "@/components/HereSection";
import FeatureCourses from "@/components/FeatureCourses";
import MusicSchoolTestiMonials from "@/components/MusicSchoolTestiMonials";
import UpcommingWebinars from "@/components/UpcommingWebinars";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HereSection />
      <FeatureCourses />
      <MusicSchoolTestiMonials/>
      <UpcommingWebinars/>
    </main>
  );
}
