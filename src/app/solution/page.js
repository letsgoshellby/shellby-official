import ConsultationFieldsSection from "@/components/sections/solution/ConsultationFieldsSection";
import ConsultationProcessSection from "@/components/sections/solution/ConsultationProcessSection";
import FAQSection from "@/components/sections/solution/FAQSection";
import SolutionHeroSection from "@/components/sections/solution/SolutionHeroSection";

export default function Solution() {
  return (
    <section>
        <SolutionHeroSection></SolutionHeroSection>
        <ConsultationProcessSection></ConsultationProcessSection>
        <ConsultationFieldsSection></ConsultationFieldsSection>
        <FAQSection></FAQSection>
    </section>
  );
}