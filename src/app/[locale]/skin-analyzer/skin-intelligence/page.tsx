import { SiteHeading } from '@/components/shared'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { FileText, Sparkles, Sun, Upload, UserCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AiPowered from '@/assets/icons/AI-Powered.svg'
import ExpertBacked from '@/assets/icons/Expert-Backed.svg'
import Personalized from '@/assets/icons/Personalized.svg'
import Chat from '@/assets/icons/chat-regular.svg'
import CommonNav from '@/components/shared/common-nav'
import { Link } from '@/i18n/navigation'

const Analysis = () => {
  const t = useTranslations('skinAnalyzerAnalysis')

  const skinTypes = [
    { key: 'oily', label: t('form.skinType.options.oily') },
    { key: 'dry', label: t('form.skinType.options.dry') },
    { key: 'combination', label: t('form.skinType.options.combination') },
    { key: 'normal', label: t('form.skinType.options.normal') },
    { key: 'sensitive', label: t('form.skinType.options.sensitive') },
  ]

  const skinConcerns = [
    { key: 'acne', label: t('form.concerns.options.acne') },
    { key: 'darkSpots', label: t('form.concerns.options.darkSpots') },
    { key: 'fineLines', label: t('form.concerns.options.fineLines') },
    { key: 'dryness', label: t('form.concerns.options.dryness') },
    { key: 'oilySkin', label: t('form.concerns.options.oilySkin') },
    { key: 'redness', label: t('form.concerns.options.redness') },
    { key: 'dullness', label: t('form.concerns.options.dullness') },
    { key: 'largePores', label: t('form.concerns.options.largePores') },
    { key: 'others', label: t('form.concerns.options.others') },
  ]

  const features = [
    {
      image: AiPowered,
      title: t('features.aiPowered.title'),
      subtitle: t('features.aiPowered.subtitle'),
    },
    {
      image: Personalized,
      title: t('features.personalized.title'),
      subtitle: t('features.personalized.subtitle'),
    },
    {
      image: ExpertBacked,
      title: t('features.expertBacked.title'),
      subtitle: t('features.expertBacked.subtitle'),
    },
  ]

  return (
    <div className="bg-[#FFFFFF]">
      <CommonNav />
      <Link
        href="/skin-analyzer/your-routine"
        className="mx-auto flex max-w-4xl items-center justify-end gap-x-1 px-6"
      >
        <Image src={Chat} alt="chat" />
        <p className="text-main-button text-center text-base leading-normal font-semibold">
          Chat Assistant
        </p>
      </Link>

      {/* Header */}
      <div className="py-12">
        <SiteHeading heading={t('header.title')} subHeading={t('header.subtitle')} />
      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#F5F6F5' }}>
          {/* Skin Type */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <Sun className="size-4" />
              {t('form.skinType.label')}
            </Label>
            <div className="flex flex-wrap gap-2">
              {skinTypes.map((type) => (
                <button
                  key={type.key}
                  type="button"
                  className={cn(
                    'rounded-md border px-4 py-2 text-sm transition-colors',
                    'border-main-button/30 text-main-button hover:border-main-button bg-white'
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Age */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <UserCircle className="size-4" />
              {t('form.age.label')}
            </Label>
            <Input
              type="text"
              placeholder={t('form.age.placeholder')}
              className="border-main-button/30 bg-white"
            />
          </div>

          {/* Skin Concerns */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4" />
              {t('form.concerns.label')}
            </Label>
            <div className="flex flex-wrap gap-2">
              {skinConcerns.map((concern) => (
                <button
                  key={concern.key}
                  type="button"
                  className={cn(
                    'rounded-md border px-4 py-2 text-sm transition-colors',
                    'border-main-button/30 text-main-button hover:border-main-button bg-white'
                  )}
                >
                  {concern.label}
                </button>
              ))}
            </div>
            <Input
              placeholder={t('form.concerns.othersPlaceholder')}
              className="border-main-button mt-4 rounded-md bg-transparent"
            />
          </div>

          {/* Additional Details */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <FileText className="size-4" />
              {t('form.additionalDetails.label')}
            </Label>
            <Textarea
              placeholder={t('form.additionalDetails.placeholder')}
              className="border-main-button/30 min-h-30 bg-white"
            />
          </div>

          {/* Upload Photo */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <Upload className="size-4" />
              {t('form.uploadPhoto.label')}
            </Label>
            <div className="border-main-button/30 hover:border-main-button flex min-h-25 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-white p-6 transition-colors">
              <Upload className="text-main-button/50 mb-2 size-6" />
              <p className="text-main-button text-sm">{t('form.uploadPhoto.clickToUpload')}</p>
              <p className="text-main-button/60 text-xs">{t('form.uploadPhoto.fileTypes')}</p>
            </div>
          </div>

          {/* Submit Button */}
          <Link
            href={'/skin-analyzer/your-routine'}
            className={buttonVariants({
              className: 'bg-main-button hover:bg-main-button/90 w-full gap-2 py-6 text-white',
            })}
          >
            <Sparkles className="size-4" />
            {t('form.submitButton')}
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <Image src={feature.image} alt={feature.title} className="mb-4 size-10" />
              <h3 className="mb-2 text-xl text-black">{feature.title}</h3>
              <p className="text-sm text-black/70">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analysis
