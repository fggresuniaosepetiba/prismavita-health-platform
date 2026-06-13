import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { PositioningSection } from "@/components/sections/PositioningSection"
import { PlansSection } from "@/components/sections/PlansSection"
import { AdditionalUsersSection } from "@/components/sections/AdditionalUsersSection"
import { ConsultingSection } from "@/components/sections/ConsultingSection"
import { AudienceSection } from "@/components/sections/AudienceSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { FloatingActions } from "@/components/ui/FloatingActions"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PositioningSection />
      <PlansSection />
      <AdditionalUsersSection />
      <ConsultingSection />
      <AudienceSection />
      <FAQSection />
      <FinalCTASection />
      <FloatingActions />
    </>
  )
}
