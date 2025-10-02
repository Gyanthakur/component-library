"use client"
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import GhostButton from '@/components/buttons/GhostButton';
import DangerButton from '@/components/buttons/DangerButton';
import IconButton from '@/components/buttons/IconButton';
import LinkButton from '@/components/buttons/LinkButton';
import LoadingButton from '@/components/buttons/LoadingButton';
import OutlineButton from '@/components/buttons/OutlineButton';
import PillButton from '@/components/buttons/PillButton';
import SuccessButton from '@/components/buttons/SuccessButton';
import RoundButton from '@/components/buttons/RoundButton';
import ThemeToggleButton from '../components/ThemeToggleButton';
import SimpleCard from '@/components/cards/SimpleCard'
import ImageCard from '@/components/cards/ImageCard'
import FeatureCard from '@/components/cards/FeatureCard'
import ProfileCard from '@/components/cards/ProfileCard'
import PricingCard from '@/components/cards/PricingCard'
import DataCard from '@/components/cards/DataCard'


export default function ComponentsPage({useToggle}) {
  const { on, toggle } = useToggle();
  const [isDark, setIsDark] = useState(false);
  const handleThemeToggle = () => setIsDark((prev) => !prev);

  return (
    <>
      <Head>
        <title>Components – Open UI</title>
      </Head>
      <main className="container">
        <h1 className='text-2xl mt-4 font-bold'>Components</h1>
        <section className='mt-8 mb-8'>
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex gap-4 flex-wrap">
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
            <ThemeToggleButton></ThemeToggleButton>
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
            <DataCard title="Active Projects" value="27" icon="📂" trend={8} />
          </div>
        </section>
      </main>
    </>
  );
}
