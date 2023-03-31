import { Montserrat } from "next/font/google"
import './globals.css'

export const metadata = {
  title: 'BNB',
  description: 'BNB web app',
}

const font = Montserrat(
  {
    subsets: ['latin'],
  }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
