'use client'

import { ReactNode } from 'react'

export default function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'var(--background-normal-light)',
      zIndex: 1001,
      overflow: 'auto'
    }}>
      {children}
    </div>
  )
}
