import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PrismaVita — Smart Clinic & EHR Platform | Gestão Clínica Inteligente",
  description:
    "Plataforma SaaS de gestão clínica e prontuário eletrônico. Menos burocracia, mais atendimento. Organização, velocidade e produtividade para clínicas e consultórios.",
  keywords:
    "gestão clínica, prontuário eletrônico, EHR, software médico, SaaS saúde, PrismaVita, sistema para clínica",
  openGraph: {
    title: "PrismaVita — Menos burocracia. Mais atendimento.",
    description:
      "A plataforma que médicos e gestores escolhem para trabalhar com velocidade real.",
    type: "website",
    locale: "pt_BR",
    siteName: "PrismaVita",
  },
  robots: "index, follow",
  metadataBase: new URL("https://prismavita.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PrismaVita",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              description:
                "Plataforma SaaS de gestão clínica e prontuário eletrônico.",
              offers: {
                "@type": "Offer",
                price: "99.90",
                priceCurrency: "BRL",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f8f8ff]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
