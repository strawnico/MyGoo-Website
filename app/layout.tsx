import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "MinhaGOO | Sua galinha dos ovos de ouro no WhatsApp",
  description:
    "Gerencie suas finanças diretamente pelo WhatsApp com a MinhaGOO. Controle gastos, crie metas e economize mais através de uma simples conversa.",
  icons: {
    icon: "/img/favicon/favicon.ico",
  },
  openGraph: {
    title: "MinhaGOO | Sua galinha dos ovos de ouro no WhatsApp",
    description:
      "Controle gastos, crie metas e economize mais com a ajuda da sua galinha dos ovos de ouro via WhatsApp.",
    images: ["/img/og-image.jpg"],
    url: "https://minhagoo.com.br",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      </body>
    </html>
  )
}