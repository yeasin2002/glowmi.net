'use client'

import { useUserProduct } from '@/api/api-hooks/product.api-hook'
import type { Product } from '@/api/query-list/product.query'
import productFallbackImage from '@/assets/image/serum-drop-product.jpg'
import { Button } from '@/components/ui'
import { AlertCircle, Plus, RefreshCw, ShoppingBag } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ProductDetailsSkeleton } from './product-details-skeleton'

function ProductDetailsMessage({
  title,
  description,
  actionLabel,
  busyLabel,
  onAction,
  isBusy = false,
}: {
  title: string
  description: string
  actionLabel?: string
  busyLabel?: string
  onAction?: () => void
  isBusy?: boolean
}) {
  return (
    <div className="bg-background min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-3xl items-center justify-center">
        <div className="border-border bg-card w-full rounded-2xl border p-8 text-center shadow-sm">
          <AlertCircle className="text-main-button mx-auto size-12" />
          <h1 className="text-main-button mt-4 text-2xl font-normal">{title}</h1>
          <p className="text-main-button/70 mt-3 text-sm leading-relaxed">{description}</p>
          {onAction && actionLabel ? (
            <Button
              type="button"
              variant="outline"
              className="border-main-button text-main-button mt-6 rounded-md px-6"
              onClick={onAction}
              disabled={isBusy}
            >
              <RefreshCw className="size-4" />
              {isBusy ? (busyLabel ?? actionLabel) : actionLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function splitParagraphs(text?: string) {
  if (!text) {
    return []
  }

  return text.split(/\n\s*\n/).flatMap((paragraph) => {
    const trimmed = paragraph.trim()
    return trimmed ? [trimmed] : []
  })
}

function getProductImageSource(product?: Product) {
  const imageSource = product?.images?.[0]?.image
  return imageSource || productFallbackImage
}

const SingleProductDetails = () => {
  const t = useTranslations('productDetails')
  const params = useParams<{ id?: string | string[] }>()

  const rawProductId = params?.id
  const productId = Array.isArray(rawProductId) ? rawProductId[0] : rawProductId
  const normalizedProductId = productId?.trim() || undefined

  const {
    data: product,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useUserProduct(normalizedProductId)

  if (!normalizedProductId) {
    return <ProductDetailsMessage title={t('empty.title')} description={t('empty.description')} />
  }

  if (isLoading) {
    return <ProductDetailsSkeleton />
  }

  if (isError) {
    return (
      <ProductDetailsMessage
        title={t('error.title')}
        description={t('error.description')}
        actionLabel={t('retry')}
        busyLabel={t('loading')}
        isBusy={isFetching}
        onAction={() => {
          void refetch()
        }}
      />
    )
  }

  if (!product) {
    return (
      <ProductDetailsMessage
        title={t('empty.title')}
        description={t('empty.description')}
        actionLabel={t('retry')}
        busyLabel={t('loading')}
        onAction={() => {
          void refetch()
        }}
      />
    )
  }

  const title = product.title?.trim() || t('productName')
  const subtitle = product.sub_title?.trim() || t('subtitle')
  const price = product.price?.trim() || t('price')
  const volume = product.size?.trim() || t('volume')
  const skinType = product.skin_type?.trim() || t('skinType.value')
  const category = product.category_name?.trim()
  const descriptionParagraphs = splitParagraphs(product.description)
  const keyIngredients = product.key_ingredients?.trim() || t('keyIngredients.value')
  const keyBenefits = product.key_benefits?.trim() || t('keyBenefits.value')
  const howToUse = product.how_to_use?.trim() || t('howToUse.value')
  const imageSource = getProductImageSource(product)

  return (
    <div className="bg-background min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left - Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f5f4f3]">
          <Image
            src={imageSource}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
          />
          {category ? (
            <span className="bg-main-button absolute top-4 left-4 rounded-full px-3 py-1 text-xs text-white">
              {category}
            </span>
          ) : null}
        </div>

        {/* Right - Product Details */}
        <div>
          <h1 className="text-main-button text-4xl font-normal">{title}</h1>
          <p className="text-main-button/70 mt-1 text-sm">{subtitle}</p>

          <div className="mt-4 flex flex-wrap items-baseline gap-2">
            <span className="text-main-button text-2xl font-medium">{price}</span>
            <span className="text-main-button/60 text-sm">{volume}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="bg-main-button flex items-center gap-4 rounded-md px-4 py-2 text-white">
              <span>1</span>
              <Plus className="size-4" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="border-main-button text-main-button flex items-center gap-2 rounded-md px-6 py-2"
            >
              {t('addToCart')}
              <ShoppingBag className="size-4" />
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-main-button text-lg font-semibold">{t('description.title')}</h3>
            <div className="text-main-button/80 mt-2 space-y-4 text-sm leading-relaxed">
              {descriptionParagraphs.length > 0 ? (
                descriptionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              ) : (
                <p>{t('description.paragraph1')}</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-main-button text-lg font-semibold italic">{t('skinType.title')}</h3>
            <p className="text-main-button/80 mt-2 text-sm">{skinType}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-main-button text-lg font-semibold italic">
              {t('keyIngredients.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">{keyIngredients}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-main-button text-lg font-semibold italic">
              {t('keyBenefits.title')}
            </h3>
            <p className="text-main-button/80 mt-2 text-sm">{keyBenefits}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-main-button text-lg font-semibold italic">{t('howToUse.title')}</h3>
            <p className="text-main-button/80 mt-2 text-sm">{howToUse}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetails
