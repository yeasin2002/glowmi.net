import newLogo from '@/assets/icons/logo.svg'
import { Link } from '@/i18n/navigation'
import { Info, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { LanguageToggle } from '../language-toggle'

const navActions = [
  { icon: Info, label: 'Information', href: '/coming-soon' },
  { icon: Mail, label: 'Contact', href: '/coming-soon' },
  { icon: MapPin, label: 'Location', href: '/coming-soon' },
] as const

type Props = {
  navItems: {
    name: string
    url: string
  }[]
}

export const NewNavLarge = ({ navItems }: Props) => {
  return (
    <header className="hidden w-full bg-white py-4 lg:block">
      <div className="container mx-auto px-4">
        {/* Logo - Top Center */}
        <div className="flex justify-center pb-16">
          <Link href="/">
            <Image
              src={newLogo}
              alt="GLOWMI"
              width={140}
              height={40}
              className="h-auto w-32 lg:w-36"
            />
          </Link>
        </div>

        {/* Navigation Bar - Nav Items Center + Icons Right */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Links - Center */}
          <nav className="flex items-center gap-8 lg:gap-40">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={{ pathname: item.url }}
                className="text-[1.20rem] leading-normal font-light! text-black transition-opacity hover:opacity-70"
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
                  <Icon className="size-[1.20rem] font-semibold" strokeWidth="1.5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
