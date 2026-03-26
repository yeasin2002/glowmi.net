'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import { SiteHeading } from '@/components/shared'
import { Card, CardContent } from '@/components/ui/card'

import afterImage from '@/assets/image/Transformation-After.png'
import beforeImage from '@/assets/image/Transformation-Before.png'

import waterDrop from '@/assets/icons/water-drop.png'
import waveImage from '@/assets/icons/wave.svg'
import windFlow from '@/assets/icons/wind-flow.png'

type FeatureCardProps = {
  icon: StaticImageData
  title: string
  description: string
}

type TransformationProps = {
  title: string
  desc: string
  beforeSkinRoughnessTitle: string
  beforeSkinRoughnessDesc: string
  beforeDeadSkinTitle: string
  beforeDeadSkinDesc: string
  afterRadiantGlowTitle: string
  afterRadiantGlowDesc: string
  afterProvenEffectivenessTitle: string
  afterProvenEffectivenessDesc: string
}

export function Transformation({
  title,
  desc,
  beforeSkinRoughnessTitle,
  beforeSkinRoughnessDesc,
  beforeDeadSkinTitle,
  beforeDeadSkinDesc,
  afterRadiantGlowTitle,
  afterRadiantGlowDesc,
  afterProvenEffectivenessTitle,
  afterProvenEffectivenessDesc,
}: TransformationProps) {
  const beforeFeatures: FeatureCardProps[] = [
    {
      icon: waterDrop,
      title: beforeSkinRoughnessTitle,
      description: beforeSkinRoughnessDesc,
    },
    {
      icon: windFlow,
      title: beforeDeadSkinTitle,
      description: beforeDeadSkinDesc,
    },
  ]

  const afterFeatures: FeatureCardProps[] = [
    {
      icon: waterDrop,
      title: afterRadiantGlowTitle,
      description: afterRadiantGlowDesc,
    },
    {
      icon: windFlow,
      title: afterProvenEffectivenessTitle,
      description: afterProvenEffectivenessDesc,
    },
  ]

  return (
    <section className="relative py-16">
      <SiteHeading heading={title} subHeading={desc} />
      <Image
        src={waveImage}
        alt="wave"
        className="absolute top-60 left-1/2 w-44 lg:top-44 lg:w-80"
      />

      <div className="container m-10 mx-auto mt-40 rounded-2xl bg-[#2447311A] px-4 py-24">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Left Feature Cards - aligned to top */}
          <div className="flex w-full flex-col justify-start gap-4 lg:w-64">
            {beforeFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <BeforeAfterComparison />

          {/* Right Feature Cards - aligned to bottom */}
          <div className="flex w-full flex-col justify-end gap-4 lg:w-64">
            {afterFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div
      className="border-main-button relative h-125 w-full max-w-125 overflow-hidden rounded-3xl border-8 lg:h-175!"
      style={{ direction: 'ltr' }}
    >
      {/* After Image (Background) */}
      <Image src={afterImage} alt="After transformation" fill className="object-cover" priority />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before transformation"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/50"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
                <ChevronLeft className="h-4 w-4 text-gray-600" />
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </div> */}
      </div>

      {/* Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 z-30 h-full w-full cursor-grab opacity-0"
        aria-label="Before and after comparison slider"
      />

      {/* Bottom Navigation Dots */}
      {/* <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 backdrop-blur-sm">
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100"
          onClick={() => setSliderPosition(Math.max(0, sliderPosition - 10))}
          aria-label="Move slider left"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100"
          onClick={() => setSliderPosition(Math.min(100, sliderPosition + 10))}
          aria-label="Move slider right"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div> */}
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className={`p-5`}>
        <Image src={icon} alt={title} width={24} height={24} className="w-4" />
        <h4 className="text-main-secondary mt-3 text-sm font-medium">{title}</h4>
        <p className={`text-main-primary-base_medium mt-1 text-sm leading-relaxed`}>
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
