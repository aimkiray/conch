import { type Message } from 'ai'
import React from 'react'

// import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'

export interface ChatList {
  messages: Message[]
}

const ChatMessageMemo = React.memo(ChatMessage);

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessageMemo message={message} />
        </div>
      ))}
    </div>
  )
}
