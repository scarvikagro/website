import './global.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Scarvik - Solu\u00e7\u00f5es Agrointeligentes',
  description: 'Tecnologia e Intelig\u00eancia no Agro',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
