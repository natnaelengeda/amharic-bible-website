import React from 'react'

import Image from 'next/image'

// Shadcn
import { SidebarTrigger } from "@/components/ui/sidebar"
// AppAsset
import AppAsset from '@/core/AppAsset'

export default function Header() {
  return (
    <header
      className="w-full flex h-16 shrink-0 items-center gap-2 border-b border-gray-400 px-4">

      <div
        className="w-full mx-auto flex items-center gap-5">
        <SidebarTrigger size={"icon"} />
        <Image
          src={AppAsset.logo}
          alt="logo"
          className="w-10 h-10 rounded" />
        <span
          className="text-lg font-bold">
          Amharic Bible
        </span>
      </div>

    </header>
  )
}
