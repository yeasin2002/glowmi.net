'use client'

import { Link } from '@/i18n/navigation'
import { Heart, Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Product, eveningProducts, morningProducts } from './your-routine.data'

type ProductCardProps = {
  product: Product
  t: ReturnType<typeof useTranslations>
}

export const YourRoutinesContents = () => {
  const t = useTranslations('yourRoutine')

  return (
    <div className="mx-auto mt-8 max-w-4xl space-y-6 px-6">
      {/* Morning Routine */}
      <div className="bg-brand-shade-10 rounded-2xl p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Sun className="size-12 text-yellow-500" />
            <div className="space-y-3">
              <h2 className="text-main-button text-5xl">{t('routines.morning.title')}</h2>
              <p className="text-main-button text-sm">{t('routines.morning.subtitle')}</p>
            </div>
          </div>
          <button type="button" className="text-main-button/50 hover:text-main-button">
            <Heart className="size-6" />
          </button>
        </div>

        <div className="mt-10 space-y-6">
          {morningProducts.map((product) => (
            <ProductCard key={`morning-${product.step}`} product={product} t={t} />
          ))}
        </div>
      </div>

      {/* Evening Routine */}
      <div className="bg-brand-shade-10 rounded-2xl p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Moon className="text-main-button size-12" />
            <div className="space-y-3">
              <h2 className="text-main-button text-5xl">{t('routines.evening.title')}</h2>
              <p className="text-main-button/60 text-sm">{t('routines.evening.subtitle')}</p>
            </div>
          </div>
          <button type="button" className="text-main-button/50 hover:text-main-button">
            <Heart className="size-6" />
          </button>
        </div>

        <div className="space-y-6">
          {eveningProducts.map((product) => (
            <ProductCard key={`evening-${product.step}`} product={product} t={t} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ProductCard = ({ product, t }: ProductCardProps) => {
  // Get translation key based on product name
  const productKey =
    product.name === 'Gentle Cleansing Gel' ? 'gentleCleansingGel' : 'hydratingEssenceSerum'

  return (
    <Link href={'/skin-analyzer/product-details/1234'} className="flex items-start gap-4 pl-4">
      <div className="bg-main-button flex size-6 shrink-0 items-center justify-center rounded-full text-xs text-white">
        {product.step}
      </div>
      <div className="flex-1">
        <h3 className="text-main-button text-lg font-bold">{t(`products.${productKey}.name`)}</h3>
        <p className="text-main-button/60 text-sm">
          {t(`products.${productKey}.brand`)} • {t(`products.${productKey}.type`)}
        </p>
        <p className="text-main-button/80 mt-1 text-sm">
          {t(`products.${productKey}.instruction`)}
        </p>
      </div>
      <div className="relative shrink-0">
        <Image
          src={product.image}
          alt={t(`products.${productKey}.name`)}
          width={200}
          height={200}
          className="min-h-40 min-w-32 rounded-lg object-cover"
        />
        <span className="absolute -bottom-2 left-1/2 w-full -translate-x-1/2 rounded-b bg-black/70 px-2 py-0.5 text-center text-xs text-white">
          {product.price}
        </span>
      </div>
    </Link>
  )
}
