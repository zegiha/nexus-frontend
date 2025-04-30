import type { Metadata } from "next";
import "./globals.css";
import "swiper/css"
import localFont from 'next/font/local'
import {ReactNode} from 'react'
import { Header } from "@/shared/layout";

const Pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Nexus",
  description: "요즘 뉴스보는 제일 좋은 방법",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
    <body className={`${Pretendard.className}`}>
      <Header></Header>
      {children}
    <div id={''}/>
    </body>
    </html>
  )
}
