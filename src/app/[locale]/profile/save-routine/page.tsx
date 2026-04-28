import { Trash2 } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '../../../../components/ui/badge'

const SaveRoutine = async () => {
  const t = await getTranslations('profile.saveRoutine')

  const routines = [
    {
      id: 1,
      title: t('routines.personal'),
      date: '20 Nov, 2025',
      daysAgo: `1 ${t('daysAgo')}`,
      status: 'active',
    },
    {
      id: 2,
      title: t('routines.acne'),
      date: '20 Nov, 2025',
      daysAgo: `1 ${t('daysAgo')}`,
      status: 'inactive',
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-main-primary-base_medium text-xl font-bold">{t('title')}</h2>
      <div className="space-y-3">
        {routines.map((routine) => (
          <Card key={routine.id} className="border-main-button/30 bg-background-secondary">
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-main-button text-3xl font-normal">{routine.title}</h3>
                <p className="text-primary-base_medium! text-sm">
                  {routine.date} • {routine.daysAgo}
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <Badge className="px-8 py-4 text-xs">{routine.status}</Badge>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${t('deleteLabel')} ${routine.title}`}
                >
                  <Trash2 className="size-5 text-[#58351B]" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SaveRoutine
