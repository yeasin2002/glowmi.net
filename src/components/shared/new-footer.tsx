import logoCompact from '@/assets/icons/logo/logo-mini-white.svg'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

// social icons
import snapchat from '@/assets/icons/social/basil_snapchat-outline.svg'
import twitter from '@/assets/icons/social/devicon_twitter.svg'
import tiktok from '@/assets/icons/social/ic_sharp-tiktok.svg'
import facebook from '@/assets/icons/social/lucide_facebook.svg'
import instagram from '@/assets/icons/social/mynaui_instagram.svg'
import linkedin from '@/assets/icons/social/ri_linkedin-fill.svg'

const footerLinks = [
  { href: '/', label: 'nav.home' },
  { href: '/coming-soon', label: 'nav.aboutUs' },
  { href: '/coming-soon', label: 'legal.privacyPolicy' },
  { href: '/coming-soon', label: 'legal.termsConditions' },
] as const

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon: facebook },
  { name: 'Instagram', url: 'https://www.instagram.com/glowmiarabia', icon: instagram },
  { name: 'linkedin', url: 'https://sa.linkedin.com/company/glowmi-arabial', icon: linkedin },
  { name: 'TikTok', url: 'https://www.tiktok.com/@glowmiarabia', icon: tiktok },
  { name: 'twitter', url: 'https://x.com/glowmiarabial', icon: twitter },
  { name: 'Snapchat', url: 'https://snapchat.com/t/7eLns0fy', icon: snapchat },
] as const

const contactEmail = 'info@glowmi.net'
type Props = {} & React.ComponentPropsWithRef<'footer'>

export const NewFooter = async ({ className, ...props }: Props) => {
  const tHome = await getTranslations('home.footer')
  const tShared = await getTranslations('shared.footer')

  return (
    <footer
      className={cn('relative w-full bg-black py-12 text-white md:py-16 lg:py-20', className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Top Navigation Links - Centered */}
        <nav className="mb-12 flex flex-col flex-wrap items-center justify-center gap-6 text-center md:mb-16 md:flex-row md:gap-12 lg:mb-20 lg:gap-37.5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-normal transition-opacity hover:opacity-70 md:text-xl lg:text-2xl"
            >
              {tHome(link.label)}
            </Link>
          ))}
        </nav>

        {/* Middle Section - Contact, Logo, Contact */}
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-16 md:grid-cols-3 md:gap-12 lg:mb-20 lg:gap-47">
          <EmailContact />

          {/* Center Logo & Tagline */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image
              src={logoCompact}
              alt="Glowmi"
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <p className="text-xl font-normal md:text-2xl lg:text-[28px]">{tShared('heading')}</p>
          </div>

          <EmailContact />
        </div>

        {/* Bottom Section - Follow Us */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-bold md:text-xl lg:text-xl">{tShared('cta')}</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className={cn('size-5 md:size-6', {
                    'size-4 md:size-5': social.name === 'twitter',
                  })}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export const EmailContact = async () => {
  const tHome = await getTranslations('home.footer')
  return (
    <div className="flex flex-col gap-4 text-center md:text-right">
      <p className="footer-email-container">{tHome('contact.title')}</p>
      <a href={`mailto:${contactEmail}`} className="footer-email">
        <span>{tHome('contact.email')}:</span> <span> {contactEmail}</span>
      </a>
    </div>
  )
}
