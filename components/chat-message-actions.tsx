'use client'

import { type Message } from 'ai'
// import { IconCheck, IconCopy } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(message.content)
  }

  return (
    <div
      className={cn(
        'flex items-buttom transition-opacity group-hover:opacity-100 md:opacity-0',
        className
      )}
      {...props}
    >
      <button onClick={onCopy}>
        {isCopied ? "Copied" : "Copy"}
        <span className="sr-only">Copy message</span>
      </button>
    </div>
  )
}
