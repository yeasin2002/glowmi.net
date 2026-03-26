import { BestProductsList } from './best-products'
import { ContactUs } from './contact-us'
import { GlowmiProductShowcase } from './glowmi-product-showcase'
import { GlowmiStates } from './glowmi-states'
import { HomeBottomCta } from './home-bottom-cta'
import { NewComingSoonHero } from './new-coming-soon-hero'
import { ShowModals } from './show-modals'
import { SkincareShowcase } from './skincare-showcase'
import { TransformationWrapper } from './transformation-wrapper'
import { VisualsResults } from './visuals-results'

export default function HomePage() {
  return (
    <>
      {/* <ComingSoonHero /> */}
      <NewComingSoonHero />
      <BestProductsList />

      <div className="container mx-auto">
        <GlowmiStates />
        <ShowModals />
        <GlowmiProductShowcase />
        <VisualsResults />
        <TransformationWrapper />
        <SkincareShowcase />
      </div>

      <ContactUs />
      <HomeBottomCta />
    </>
  )
}
