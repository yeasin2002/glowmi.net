import { NavLinkList } from '@/components/shared/new-nav/navlink-list'
import { UserProfileAndStates } from './user-profile-and-states'

import icon1 from '@/assets/icons/cloud-projects.svg'
import icon2 from '@/assets/icons/heart.svg'
import icon4 from '@/assets/icons/packages.svg'
import icon3 from '@/assets/icons/solar_bag-broken.svg'
import icon5 from '@/assets/icons/solar_settings-linear.svg'
import { PrivetRoute } from '@/components/guards'
import { CommonNav } from '@/components/shared'
import { getTranslations } from 'next-intl/server'

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('profile.tabs')

  const tabsLists = [
    { id: 1, icon: icon1, label: t('overview'), href: '/profile' },
    { id: 2, icon: icon2, label: t('saveRoutine'), href: '/profile/save-routine' },
    { id: 3, icon: icon3, label: t('myCart'), href: '/profile/my-cart' },
    { id: 4, icon: icon4, label: t('orderHistory'), href: '/profile/order-history' },
    { id: 5, icon: icon5, label: t('settings'), href: '/profile/settings' },
  ]

  return (
    <PrivetRoute>
      <div className="bg-background min-h-screen">
        <CommonNav />
        <div className="px-6 py-6 lg:px-20">
          <UserProfileAndStates />
          <NavLinkList items={tabsLists} className="text-primary-base_medium!" />
          {children}
        </div>
      </div>
    </PrivetRoute>
  )
}

export default ProfileLayout
