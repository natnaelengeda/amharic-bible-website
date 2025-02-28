import React from 'react'
import Header from './Header'

interface IPageProps {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: IPageProps) {
  return (
    <div
      className='w-full h-full min-h-screen'>
      <Header />
      {children}
    </div>
  )
}
