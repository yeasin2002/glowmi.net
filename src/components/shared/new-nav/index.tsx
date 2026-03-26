import { getTranslations } from 'next-intl/server'
import { NewNavLarge } from './new-nav-large'
import { NewNavMobile } from './new-nav-mobile'

export const NewNav = async () => {
  const t = await getTranslations('shared.nav')
  const navItems = [
    { name: t('navItems.home'), url: '/' },
    { name: t('navItems.products'), url: '/coming-soon' },
    { name: t('navItems.analyzeSkin'), url: '/coming-soon' },
  ]
  return (
    <>
      <NewNavLarge buttonLabel={t('button_text')} navItems={navItems} />
      <NewNavMobile navItems={navItems} />
    </>
  )
}
