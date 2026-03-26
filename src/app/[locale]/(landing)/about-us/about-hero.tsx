import ingredientsBg from '@/assets/image/AboutUs-bg.jpg'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const AboutHero = async () => {
  const t = await getTranslations('aboutUs.hero')

  return (
    <div className="relative">
      <Image
        src={ingredientsBg}
        alt={t('imageAlt')}
        className="z-50 h-screen w-full object-cover"
        priority
        quality={100}
      />
      <h1 className="text-main-button absolute bottom-10 left-20 text-5xl leading-none font-normal tracking-normal">
        {t('title')}
      </h1>
    </div>
  )
}
