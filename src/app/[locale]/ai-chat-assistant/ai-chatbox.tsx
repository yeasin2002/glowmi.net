'use client'

import { Button } from '@/components/ui'
import { Camera, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const AiChatBox = () => {
  const t = useTranslations('aiChatAssistant')

  const quickPrompts = [
    t('quickPrompts.buildRoutine'),
    t('quickPrompts.acneProducts'),
    t('quickPrompts.vitaminC'),
    t('quickPrompts.sunscreen'),
  ]

  return (
    <div className="mx-auto w-full max-w-7xl py-10">
      {/* Input Area */}
      <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-2xl border border-[#6956CB] bg-transparent px-5 py-3">
          <input
            type="text"
            placeholder={t('inputPlaceholder')}
            className="text-main-button placeholder:text-main-secondary flex-1 bg-transparent text-sm outline-none"
          />
          <button type="button" className="hover:text-main-button text-[#757575]">
            <Camera className="size-5" />
          </button>
        </div>
        <Button className="hover:bg-main-button/90 size-12 rounded-xl bg-[#6956CB] p-0">
          <Send className="size-5 text-white" fill="white" />
        </Button>
      </div>

      {/* Quick Prompts */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="rounded-full bg-[#7D7D7D] px-4 py-2 text-xs text-white transition-colors hover:bg-[#7D7D7D]/90"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
