import { ScarcityBar } from '@/components/landing/scarcity-bar';
import { HeroSection } from '@/components/landing/hero-section';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { ProblemSolutionSection } from '@/components/landing/problem-solution-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { CourseInfoSection } from '@/components/landing/course-info-section';
import { MissionsSection } from '@/components/landing/missions-section';
import { ExpectationsSection } from '@/components/landing/expectations-section';
import { BonusesSection } from '@/components/landing/bonuses-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScarcityBar />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ProblemSolutionSection />
        <TestimonialsSection />
        <CourseInfoSection />
        <MissionsSection />
        <ExpectationsSection />
        <BonusesSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
