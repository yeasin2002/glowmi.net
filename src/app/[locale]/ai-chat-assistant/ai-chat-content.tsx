'use client'

import { Button } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type MessageType = 'user' | 'assistant'

type ProductRecommendation = {
  name: string
  brand: string
  price: string
  image: string
}

type Message = {
  id: string
  type: MessageType
  contentKey?: string
  content?: string
  product?: ProductRecommendation
}

export const AiChatContent = () => {
  const t = useTranslations('aiChatAssistant')

  const messages: Message[] = [
    {
      id: '1',
      type: 'assistant',
      contentKey: 'messages.greeting',
    },
    {
      id: '2',
      type: 'user',
      content: t('quickPrompts.acneProducts'),
    },
    {
      id: '3',
      type: 'assistant',
      contentKey: 'messages.acneAdvice',
    },
    {
      id: '4',
      type: 'user',
      content: t('quickPrompts.sunscreen'),
    },
    {
      id: '5',
      type: 'assistant',
      contentKey: 'messages.sunscreenAdvice',
      product: {
        name: 'SPF 50 Mineral Sunscreen',
        brand: 'SunShield',
        price: '$32.99',
        image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=200&h=200&fit=crop',
      },
    },
    {
      id: '6',
      type: 'user',
      content: t('quickPrompts.buildRoutine'),
    },
    {
      id: '7',
      type: 'assistant',
      contentKey: 'messages.routineAdvice',
    },
  ]

  return (
    <div className="! *: flex flex-col gap-4 py-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`rounded-2xl px-5 py-4 ${
              message.type === 'user'
                ? 'ml-8 bg-[#6956CB] text-white'
                : 'mr-8 bg-[#7D7D7D] text-white'
            }`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {message.contentKey ? t(message.contentKey as string) : message.content}
            </p>

            {/* Product Recommendation Card */}
            {message.product && <ProductRecommendationCard message={message} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export const ProductRecommendationCard = ({ message }: { message: Message }) => {
  const t = useTranslations('aiChatAssistant')
  if (!message.product) return null

  return (
    <div className="mt-4 max-w-60 overflow-hidden rounded-lg bg-white">
      <div className="relative aspect-video w-full">
        <Image
          src={message.product.image}
          alt={message.product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h4 className="text-secondary-light text-sm font-semibold">{message.product.name}</h4>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs">{message.product.brand}</span>
          <span className="text-sm font-semibold">{message.product.price}</span>
        </div>
        <Button className={`mt-3 w-full rounded-sm!`}>{t('product.viewDetails')}</Button>
      </div>
    </div>
  )
}
