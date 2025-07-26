import FinalCTASection from "@/components/sections/FinalCTASection";
import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ReviewsSection from "@/components/sections/ReviewSection";

export default function Home() {
  return (
    <section>
      <HeroSection></HeroSection>
      <PartnersSection></PartnersSection>
      <NewsSection></NewsSection>
      <ReviewsSection></ReviewsSection>
      <FinalCTASection></FinalCTASection>
    </section>
  );
}
