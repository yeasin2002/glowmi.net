import { productApi } from '@/api/query-list/product.query'
import { SiteHeading } from '@/components/shared'
import { getTranslations } from 'next-intl/server'
import { ProductsCarousel } from './products-list'

export const BestProductsList = async () => {
  const t = await getTranslations('home.bestProducts')
  const { data: response } = await productApi.getBestProducts()

  // Extract products array from the nested data property
  const products = response.data || []

  // const products: ProductItem[] = apiProducts.map((p) => ({
  //   id: p.id,
  //   // Use the first image if available, fallback to a placeholder if none
  //   src: p.images?.[0]?.image || notImageFoundImg,
  //   alt: p.title || 'Product Image',
  //   category: p.category_name || 'Skincare',
  //   benefits: p.key_benefits || '',
  //   skinType: p.skin_type || 'All Skin Types',
  // }))

  return (
    <section className="overflow-x-hidden py-10">
      <SiteHeading heading={t('title')} />

      <div className="relative w-full py-8">
        <ProductsCarousel products={products} loop={true} viewDetailsLabel={t('viewDetails')} />
      </div>
    </section>
  )
}
