import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: '中译英',
    message: '翻译为英文：'
  },
  {
    heading: '英译中',
    message: '翻译为中文：'
  },
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-2xl font-semibold">
          <span className="inline-block animate-marquee">神奇海螺俱乐部</span>
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Based on{' '}
          <ExternalLink href="https://openai.com/pricing">GPT-4</ExternalLink> and{' '}
          <ExternalLink href="https://ai.google.dev/pricing">
          Gemini Pro
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          随心配上新了：
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
