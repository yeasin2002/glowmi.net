'use client'

import newLogo from '@/assets/icons/logo.svg'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Link } from '@/i18n/navigation'
import { Info, MapPin, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { LanguageToggle } from '../language-toggle'

type Props = {
  navItems: {
    name: string
    url: string
  }[]
}

export const NewNavMobile = ({ navItems }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white py-4 lg:hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src={newLogo} alt="GLOWMI" width={120} height={35} className="h-auto w-28" />
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="rounded-lg p-2 transition-colors hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu className="size-7 text-black" />
            </SheetTrigger>

            <SheetContent side="right" className="w-75 sm:w-100" showCloseButton={false}>
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between border-b pb-4">
                <Image
                  src={newLogo}
                  alt="GLOWMI"
                  width={100}
                  height={30}
                  className="mt-2 ml-2 h-auto w-24"
                />
                <SheetClose
                  className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="size-6 text-black" />
                </SheetClose>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={{ pathname: item.url }}
                    className="rounded-lg px-4 py-3 text-xl font-normal text-black transition-colors hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t" />

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 py-6">
                <div className="flex items-center gap-3 px-4">
                  <LanguageToggle />
                </div>

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-100"
                  aria-label="Information"
                >
                  <Info className="size-6 text-black" />
                  <span className="font-medium text-black">Information</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-100"
                  aria-label="Contact"
                >
                  <Phone className="size-6 text-black" />
                  <span className="font-medium text-black">Contact</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-100"
                  aria-label="Location"
                >
                  <MapPin className="size-6 text-black" />
                  <span className="font-medium text-black">Location</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
