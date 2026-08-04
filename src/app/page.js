import FinalCTASection from "@/components/sections/home/FinalCTASection";
import HeroSection from "@/components/sections/home/HeroSection";
import PartnersSection from "@/components/sections/home/PartnersSection";
import ReviewsSection from "@/components/sections/home/ReviewSection";
import ConsultationProcessSection from "@/components/sections/solution/ConsultationProcessSection";
import ConsultationFieldsSection from "@/components/sections/solution/ConsultationFieldsSection";

export default function Home() {
  return (
    <section>
      <HeroSection></HeroSection>
      <ConsultationProcessSection></ConsultationProcessSection>
      <ConsultationFieldsSection></ConsultationFieldsSection>
      <PartnersSection></PartnersSection>
      <ReviewsSection></ReviewsSection>
      <FinalCTASection></FinalCTASection>
    </section>
  );
}
