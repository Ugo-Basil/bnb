import { Montserrat } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'

export const metadata = {
  title: 'BNB',
  description: 'BNB web app',
}

const font = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
