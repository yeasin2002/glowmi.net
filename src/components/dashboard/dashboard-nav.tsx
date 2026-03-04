'use client'

import logoLight from '@/assets/icons/logo-full-dark.png'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Link } from '@/i18n/navigation'
import { LogOut, Menu } from 'lucide-react'
import Image from 'next/image'

import icon1 from '@/assets/icons/blocks.svg'
import icon7 from '@/assets/icons/carbon_analytics.svg'
import icon3 from '@/assets/icons/notes.svg'
import icon6 from '@/assets/icons/ri_search-ai-line.svg'
import icon8 from '@/assets/icons/settings-light.svg'
import icon4 from '@/assets/icons/shop-bags.svg'
import icon2 from '@/assets/icons/tags.svg'
import icon5 from '@/assets/icons/users.svg'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../store/auth.store'

const dashboardNavList = [
  { id: 1, icon: icon1, label: 'Dashboard', href: '/dashboard' },
  { id: 2, icon: icon2, label: 'Category', href: '/dashboard/category' },
  { id: 3, icon: icon3, label: 'Products', href: '/dashboard/products' },
  { id: 4, icon: icon4, label: 'Orders', href: '/dashboard/orders' },
  { id: 5, icon: icon5, label: 'Customer', href: '/dashboard/customer' },
  { id: 6, icon: icon6, label: 'Analyzers', href: '/dashboard/analyzers' },
  { id: 7, icon: icon7, label: 'Ai Analytics', href: '/dashboard/ai-analytics' },
  { id: 8, icon: icon8, label: 'Settings', href: '/dashboard/settings' },
]

export const DashboardNav = () => {
  const router = useRouter()
  const logout = useAuthStore((state) => state.clearAuth)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }
  return (
    <header className="bg-main-button flex items-center justify-between border-b-2 border-white/40 px-4 py-4 text-white lg:px-20">
      {/* Logo and tagline */}
      <div className="flex flex-col gap-1 lg:gap-3">
        <Image src={logoLight} alt="Logo" className="max-w-24 lg:max-w-none" />
        <p className="text-primary/60 hidden text-sm lg:ml-10 lg:block">
          Monitor user interactions and skincare analytics
        </p>
      </div>

      {/* Desktop - Avatar and Logout */}
      <div className="hidden items-center gap-4 lg:flex">
        <div className="relative size-10 overflow-hidden rounded-full bg-[#f5f4f3]">
          <Image src="/placeholder-logo.png" alt="User avatar" fill className="object-cover" />
        </div>
        <button type="button" className="text-white/70 hover:text-white">
          <LogOut className="size-5" />
        </button>
      </div>

      {/* Mobile - Sheet Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="size-6 text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-main-button w-64 border-white/20">
            <div className="flex flex-col gap-6 pt-8">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full bg-[#f5f4f3]">
                  <Image
                    src="/placeholder-logo.png"
                    alt="User avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white">Admin User</p>
                  <p className="text-sm text-white/60">admin@glowmi.com</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {dashboardNavList.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Image src={item.icon} alt="" className="size-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Logout */}
              <button
                type="button"
                className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                onClick={handleLogout}
              >
                <LogOut className="size-5" />
                <span>Logout</span>
              </button>
              <button className="hidden lg:block" onClick={handleLogout}>
                <LogOut />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
