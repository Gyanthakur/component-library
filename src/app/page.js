"use client";
import React from 'react'
import ThemeToggleButton from './components/ThemeToggleButton'
import PrimaryButton from '../components/buttons/PrimaryButton'
import SecondaryButton from '../components/buttons/SecondaryButton'
import GhostButton from '../components/buttons/GhostButton'
import IconButton from '../components/buttons/IconButton'
import PillButton from '../components/buttons/PillButton'

import SimpleCard from '../components/cards/SimpleCard'
import ImageCard from '../components/cards/ImageCard'
import FeatureCard from '../components/cards/FeatureCard'
import ProfileCard from '../components/cards/ProfileCard'
import PricingCard from '../components/cards/PricingCard'
import DataCard from '@/components/cards/DataCard'
import OutlineButton from '@/components/buttons/OutlineButton'
import DangerButton from '@/components/buttons/DangerButton'
import LinkButton from '@/components/buttons/LinkButton'
import LoadingButton from '@/components/buttons/LoadingButton'
import RoundButton from '@/components/buttons/RoundButton'
import SuccessButton from '@/components/buttons/SuccessButton'
import StatsCard from '@/components/cards/StatsCard'
import TestimonialCard from '@/components/cards/TestimonialCard'

export default function Page() {
  const [isDark, setIsDark] = React.useState(false);
  const handleThemeToggle = () => setIsDark((prev) => !prev);

  return (
    <div className="space-y-12">
      <section className='mt-12'>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <PrimaryButton>Primary</PrimaryButton>
          <SecondaryButton>Secondary</SecondaryButton>
          <GhostButton>Ghost</GhostButton>
          <OutlineButton>Outline</OutlineButton>
          <DangerButton>Danger</DangerButton>
          <LinkButton>Link</LinkButton>
          <LoadingButton>Loading</LoadingButton>
          <RoundButton>Rounded</RoundButton>
          <SuccessButton>Success</SuccessButton>
          <IconButton aria-label="star">★</IconButton>
          <PillButton>Subscribe</PillButton>
          <ThemeToggleButton onClick={handleThemeToggle} isDark={isDark} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SimpleCard title="Simple Card" description="A minimal card with actions." />
          <ImageCard title="Image Card" description="Card with SVG image." />
          <FeatureCard title="Feature Card" description="Highlight features and benefits." />
          <ProfileCard name="Alex Johnson" role="Product Designer" />
          <PricingCard plan="Pro" price="$9/mo" features={["10 projects", "Priority support", "Unlimited users"]} />
          <TestimonialCard name="Jane Doe" role="CEO" quote="This product is amazing!" />
          <DataCard title="Active Projects" value="27" icon="📂" trend={8} />
          <StatsCard title="Revenue" value="$12K" icon="💰" trend={12} />
        </div>
      </section>
    </div>
  )
}

