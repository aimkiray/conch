import { SidebarDesktop } from '@/components/sidebar-desktop'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      {/* @ts-ignore */}
      <SidebarDesktop />
      <div className="flex flex-col justify-between w-full overflow-auto ml-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:ml-[250px] peer-[[data-state=open]]:xl:ml-[300px]">
        {children}
      </div>
    </div>
  )
}
