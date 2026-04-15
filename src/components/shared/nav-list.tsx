import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'

interface Props {
  className?: string
  wrapperClassName?: string
}

export const NavList = async ({ wrapperClassName, className, ...props }: Props) => {
  const t = await getTranslations('shared.nav.navItems')
  const locale = await getLocale()
  const isRTL = locale === 'ar'

  const navItemsOne = [
    { name: t('home'), url: '/' },
    { name: t('ingredients'), url: '/ingredients' },
    { name: t('analyzeSkin'), url: '/skin-analyzer/analysis' },
  ]

  const navItemsTwo = [
    { name: t('aboutUs'), url: '/about-us' },
    { name: t('contactUs'), url: '/contact-us' },
    { name: t('needHelp'), url: '/need-help' },
  ]

  // Reverse navigation items for RTL languages so Home appears on the right
  const displayNavItemsOne = isRTL ? [...navItemsOne].reverse() : navItemsOne
  const displayNavItemsTwo = isRTL ? [...navItemsTwo].reverse() : navItemsTwo

  const allNav = displayNavItemsOne.concat(displayNavItemsTwo)

  return (
    <>
      <nav
        className={cn(`hidden items-center justify-between md:flex`, wrapperClassName)}
        {...props}
      >
        <div className="flex items-center gap-8 lg:gap-12">
          {displayNavItemsOne.map((item) => (
            <Link
              key={item.name}
              href={{ pathname: item.url }}
              className={cn(
                `text-lg font-medium text-white transition-opacity hover:opacity-80 lg:text-2xl`,
                className
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          {displayNavItemsTwo.map((item) => (
            <Link
              key={item.name}
              href={{ pathname: item.url }}
              className={cn(
                `text-base font-medium text-white transition-opacity hover:opacity-80 lg:text-lg`,
                className
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <Sheet>
        <SheetTrigger className={cn(`md:hidden`, wrapperClassName)}>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="sr-only">Navigation menu</SheetDescription>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-4">
            {allNav.map((item) => (
              <Link
                key={item.name}
                href={{ pathname: item.url }}
                className={cn(
                  `text-main-button text-lg font-medium transition-colors hover:opacity-80`,
                  className
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
