import contactUsBg from '@/assets/image/contact-image-trans.png'
import { Mail, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const ContactUs = async () => {
  const t = await getTranslations('home.contactUs')

  return (
    <div className="relative min-h-screen bg-[#FBFAF6]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 md:grid-cols-2 lg:px-8">
        {/* Left - Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-main-button mb-4 text-5xl leading-none font-normal tracking-normal">
            {t('title')}
          </h1>

          <p className="text-main-primary-base_medium mb-8 text-lg leading-relaxed">
            {t('description')}
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${t('email')}`}
              className="text-main-primary-base_medium flex items-center gap-3 text-lg hover:underline"
            >
              <Mail className="size-5" />
              {t('email')}
            </a>

            <a
              href={`tel:${t('phone')}`}
              className="text-main-primary-base_medium flex items-center gap-3 text-sm hover:underline"
            >
              <Phone className="size-5" />
              {t('phone')}
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative flex items-center justify-center">
          <Image
            src={contactUsBg}
            alt={t('imageAlt')}
            className="h-auto w-96 object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom dark green bar */}
      <div className="bg-main-button h-3 w-full" />
    </div>
  )
}

export default ContactUs
