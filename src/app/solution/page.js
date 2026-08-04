import FAQSection from "@/components/sections/solution/FAQSection";
import SolutionHeroSection from "@/components/sections/solution/SolutionHeroSection";

export default function Solution() {
  return (
    <section>
        <SolutionHeroSection></SolutionHeroSection>
        {/* <ConsultationProcessSection /> */} {/* 홈으로 이동 */}
        {/* <ConsultationFieldsSection /> */} {/* 홈으로 이동 */}
        <FAQSection></FAQSection>
    </section>
  );
}