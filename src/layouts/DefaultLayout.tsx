import React from 'react'

// Components
import Header from './Header'
import AppSidebar from './Sidebar'

// Shadcn
import { SidebarProvider } from "@/components/ui/sidebar"

interface IPageProps {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: IPageProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div
        className='w-full h-full min-h-screen'>
        <Header />
        {children}
      </div>
    </SidebarProvider>
  )
}
