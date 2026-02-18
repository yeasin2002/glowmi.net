'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  className?: string
  labelName?: string
}

export function DatePicker({
  value,
  onChange,
  className,
  labelName = 'Select date',
}: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            id="date"
            className={cn('justify-start rounded-full font-normal', className)}
          >
            {date ? date.toLocaleDateString() : labelName}
          </Button>
        }
      />
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          defaultMonth={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date)
            setOpen(false)
            onChange?.(date)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
