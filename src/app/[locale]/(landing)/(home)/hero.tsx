import { NavList } from '@/components/shared/nav-list'
import { Button } from '@/components/ui'
import { getTranslations } from 'next-intl/server'

export const Hero = async () => {
  const t = await getTranslations('home.hero')
  return (
    <main className="bg-main-button relative h-[60vh] lg:h-[80vh]">
      <div className="bg-primary absolute inset-0 size-full min-h-full min-w-full"></div>
      <video
        src={'/hero-video.mp4'}
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.jpg"
        className="h-full w-full object-cover"
      />
      <div className="bg-primary absolute inset-0 flex flex-col items-center justify-center gap-y-10 lg:gap-y-28">
        <h1 className={`text-3xl text-white lg:text-6xl`}>{t('title')}</h1>
        <Button
          className={`text-xl font-normal uppercase [box-shadow:none]! lg:px-10 lg:py-8 lg:text-2xl`}
        >
          {t('cta')}
        </Button>
      </div>
      <NavList wrapperClassName="absolute top-5 right-2 justify-around md:w-full" />
    </main>
  )
}
