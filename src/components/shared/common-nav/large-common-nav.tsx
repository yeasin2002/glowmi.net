import newLogo from '@/assets/GLOWMI-logo.svg'
import userImgTemporary from '@/assets/image/bottom-cta-bg-image.jpg'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { LanguageToggle } from '../language-toggle'

export const LargeCommonNav = () => {
  return (
    <header className="hidden w-full bg-white lg:block">
      <div className="container mx-auto px-4">
        <div className="flex min-h-35 items-center justify-between">
          <div className="shrink-0">
            <Image
              src={newLogo}
              alt="GLOWMI"
              width={400}
              height={120}
              className="h-auto w-44"
              loading="eager"
            />
          </div>

          <div className="flex items-center gap-5">
            <LanguageToggle />

            <div className="relative size-11 overflow-hidden rounded-full">
              <Image
                src={userImgTemporary}
                alt="User avatar"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full text-[#ff2d2d] transition-colors hover:bg-red-50"
              aria-label="Sign out"
            >
              <LogOut className="size-6" strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
