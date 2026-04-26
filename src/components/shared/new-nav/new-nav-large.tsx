import newLogo from '@/assets/GLOWMI-logo.svg'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { Info, Mail, MapPin } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { LanguageToggle } from '../language-toggle'


const navActions = [
  { icon: Info, label: 'Information', href: '/coming-soon' },
  { icon: Mail, label: 'Contact', href: '/coming-soon' },
  { icon: MapPin, label: 'Location', href: '/coming-soon' },
] as const

type Props = {
  buttonLabel: string
  navItems: {
    name: string
    url: string
  }[]
}

export const NewNavLarge = ({ buttonLabel, navItems }: Props) => {
  const locale = useLocale()
  const isRTL = locale === 'ar'

  // Reverse navigation items for RTL languages so Home appears on the right
  const displayNavItems = isRTL ? [...navItems].reverse() : navItems
  return (
    <header className="hidden w-full bg-white py-4 lg:block">
      <div className="container mx-auto px-4">
        {/* Top Row - Logo Centered, Sign In Button Right */}
        <div className="relative pt-4 pb-16">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src={newLogo}
                alt="GLOWMI"
                width={400}
                height={400}
                className="w-32 lg:w-36"
                loading="eager"
              />
            </Link>
          </div>

          <div className="absolute top-4 right-0">
            <Link
              href={'/login'}
              className={buttonVariants({
                //  className: 'bg-primary! hover:bg-primary w-full rounded-md py-2 text-sm text-white',
                size: 'lg',
              })}
            >
              {buttonLabel}
            </Link>
          </div>
        </div>

        {/* Navigation Bar - Nav Items Center + Icons Right */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Links - Center */}
          <nav className="flex items-center gap-8 lg:gap-40">
            {displayNavItems.map((item) => (
              <Link
                key={item.name}
                href={{ pathname: item.url }}
                className="text-primary text-[1.20rem] leading-normal font-light! transition-opacity hover:opacity-70"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icon Actions - Absolute Right */}
          <div className="absolute right-0 flex items-center gap-3">
            <LanguageToggle />
            {navActions.map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="rounded-full p-2 transition-colors hover:bg-gray-100"
                  aria-label={action.label}
                >
                  <Icon className="size-4 font-semibold text-[#363739]" strokeWidth="1.5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
