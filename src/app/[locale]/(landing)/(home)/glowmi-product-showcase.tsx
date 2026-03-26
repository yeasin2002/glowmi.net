import Image from 'next/image'

import showcase1 from '@/assets/products/Box/Cleanser-Box.png'
import showcase2 from '@/assets/products/Box/Radiant-Satin Lip-Oil-Box.png'
import showcase3 from '@/assets/products/Box/Serum-Dropper-box.png'
import showcase4 from '@/assets/products/Box/Sleeping-Mask-Box.jpg'

import { SiteHeading } from '@/components/shared'

import { getTranslations } from 'next-intl/server'

const imageList = [showcase1, showcase2, showcase3, showcase4]

export const GlowmiProductShowcase = async () => {
  const t = await getTranslations('home.products_showcase')

  return (
    <div>
      <SiteHeading heading={t('title')} wrapperClassname="py-10" />

      <div className="grid grid-cols-1 items-center gap-1 lg:grid-cols-4">
        {imageList.map((im, index) => (
          <Image
            key={index}
            src={im}
            alt="Product showcase"
            className="h-full w-full object-cover"
          />
        ))}
      </div>

      {/* Video Section with Text Overlay */}
      <div className="relative mt-8 h-75 w-full overflow-hidden sm:h-100 md:h-175 lg:mt-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/showcase-video.mp4" type="video/mp4" />
        </video>

        {/* Text Overlay */}
        <div
          className="absolute inset-0 flex items-center"
          style={{
            background:
              'linear-gradient(90deg, rgba(36, 71, 49, 0.5) 36.54%, rgba(13, 49, 26, 0) 75.96%)',
          }}
        >
          <div className="px-6 py-8 sm:px-12 md:px-16 lg:px-24">
            <h2
              className={
                'max-w-md text-2xl leading-tight text-white italic sm:text-3xl md:text-4xl lg:text-5xl'
              }
            >
              {t('heading')}
            </h2>
            <p className={`mt-4 max-w-sm text-sm text-white/80 sm:text-base`}>{t('subheading')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
