import FinalCTASection from "@/components/sections/home/FinalCTASection";
import HeroSection from "@/components/sections/home/HeroSection";
import NewsSection from "@/components/sections/home/NewsSection";
import PartnersSection from "@/components/sections/home/PartnersSection";
import ReviewsSection from "@/components/sections/home/ReviewSection";

export default function Home() {
  return (
    <section>
      <HeroSection></HeroSection>
      <PartnersSection></PartnersSection>
      <ReviewsSection></ReviewsSection>
      <FinalCTASection></FinalCTASection>
    </section>
  );
}
