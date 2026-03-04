import { getTranslations } from 'next-intl/server'
import { NewNavLarge } from './new-nav-large'
import { NewNavMobile } from './new-nav-mobile'

export const NewNav = async () => {
  const t = await getTranslations('shared.nav.navItems')
  const navItems = [
    { name: t('home'), url: '/' },
    { name: t('products'), url: '/coming-soon' },
    { name: t('analyzeSkin'), url: '/coming-soon' },
  ]
  return (
    <>
      <NewNavLarge navItems={navItems} />
      <NewNavMobile navItems={navItems} />
    </>
  )
}
