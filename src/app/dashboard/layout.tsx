import { Header } from '@/app/dashboard/components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}