import TeamHeroSection from "@/components/sections/team/TeamHeroSection";
import TeamMembersSection from "@/components/sections/team/TeamMembersSection";
import TeamStorySection from "@/components/sections/team/TeamStorySection";

export default function Team() {
  return (
    <section>
        <TeamHeroSection></TeamHeroSection>
        <TeamMembersSection></TeamMembersSection>
        <TeamStorySection></TeamStorySection>
    </section>
  );
}
