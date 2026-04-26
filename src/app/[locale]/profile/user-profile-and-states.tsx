'use client'

import { useProfile } from '@/api/api-hooks/profile.api-hook'
import defaultUserImage from '@/assets/image/default-avatar.png'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CalendarDays, Package, Search, ShoppingBag } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const UserProfileAndStates = () => {
  const t = useTranslations('profile')
  const { data: userProfile, isLoading, isError } = useProfile()

  const userStats = [
    {
      id: 1,
      icon: Search,
      value: '2',
      label: t('stats.analysis'),
    },
    {
      id: 2,
      icon: ShoppingBag,
      value: '1',
      label: t('stats.cartProduct'),
    },
    {
      id: 3,
      icon: Package,
      value: '1',
      label: t('stats.orderProduct'),
    },
    {
      id: 4,
      icon: CalendarDays,
      value: '19',
      label: t('stats.daysActive'),
    },
  ]

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card className="bg-brand-shade-10 border-none shadow-none">
          <CardContent className="flex items-center gap-6">
            <Skeleton className="size-20 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-brand-shade-10 border-none shadow-none">
              <CardContent className="pt-4">
                <Skeleton className="size-6" />
                <Skeleton className="mt-4 h-10 w-12" />
                <Skeleton className="mt-2 h-4 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <Card className="bg-brand-shade-10 border-none shadow-none">
        <CardContent className="flex items-center justify-center p-6 text-red-500">
          <p>Failed to load profile. Please try again later.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="bg-brand-shade-10 border-none shadow-none">
        <CardContent className="flex items-center gap-6">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
            <Image
              // src={userProfile?.image || defaultUserImage}
              src={defaultUserImage}
              alt={userProfile?.full_name || 'Name'}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-main-button text-2xl font-normal">
              {userProfile?.full_name || 'Name'}
            </h2>
            <p className="text-main-button/70 text-sm">
              {userProfile?.email || t('userProfile.email')}
            </p>
            <span className="bg-main-button mt-2 inline-block rounded-full px-4 py-1 text-xs text-white capitalize">
              {userProfile?.skin_type || t('userProfile.skinConcern')}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {userStats.map((stat) => (
          <Card key={stat.id} className="bg-brand-shade-10 border-none shadow-none">
            <CardContent className="pt-4">
              <stat.icon className="text-main-button size-6" />
              <p className="text-main-button mt-4 text-4xl font-normal">{stat.value}</p>
              <p className="text-main-button/70 mt-1 text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
