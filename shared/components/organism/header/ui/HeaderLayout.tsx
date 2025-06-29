import Header from '@/shared/components/organism/header/ui/Header'

export default function({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}