import { CheckoutItems } from '@/components/shared/checkout-items'
import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'

const MyCart = async () => {
  const t = await getTranslations('profile.myCart')

  return (
    <div className="space-y-6">
      <CheckoutItems />

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xl text-[#6D5534]">
          <span>{t('subtotal')}</span>
          <span className="font-medium">$98.99 USD</span>
        </div>
        <Button className="! w-full py-7 text-xl">{t('continueToCheckout')}</Button>
        <Button variant="outline" className="! border-main-button w-full py-7 text-xl">
          More Products
        </Button>
      </div>
    </div>
  )
}

export default MyCart
