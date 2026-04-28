'use client'

import { useUserProduct } from '@/api/api-hooks/product.api-hook'
import type { Product } from '@/api/query-list/product.query'
import productFallbackImage from '@/assets/image/no-image-placeholder.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { AddToCartWithIncrement } from './add-to-cart-with-increment'
import { ProductDetailsMessage } from './product-details-message'
import { ProductDetailsSkeleton } from './product-details-skeleton'

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

  if (isLoading) return <ProductDetailsSkeleton />

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

  const title = product.data.title?.trim() || '-'
  const subtitle = product.data?.sub_title?.trim() || '-'
  const price = product.data?.price?.trim() || '-'
  const volume = product.data?.size?.trim() || '-'
  const skinType = product.data?.skin_type?.trim() || '-'
  const category = product.data?.category_name?.trim()
  const descriptionParagraphs = splitParagraphs(product.data?.description) || '-'
  const keyIngredients = product.data?.key_ingredients?.trim() || '-'
  const keyBenefits = product.data?.key_benefits?.trim() || '-'
  const howToUse = product.data?.how_to_use?.trim() || '-'
  const imageSource = getProductImageSource(product.data)

  return (
    <div className="bg-background min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left - Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={imageSource}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-square object-contain p-8"
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

          <AddToCartWithIncrement productId={product.data.id ?? normalizedProductId} />

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

// Utils related this this page
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
