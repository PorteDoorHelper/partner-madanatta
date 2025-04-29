import type React from "react"
import "@/app/globals.css"
import { Barlow, Bebas_Neue } from "next/font/google"
import { Phone, Mail, MapPin } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary, type Locale, locales } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { SocialIcons } from "@/components/social-icons"
import Link from "next/link"
import Image from "next/image"

// Используем шрифт Barlow вместо Montserrat
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-barlow",
})

// Оставляем Bebas Neue для заголовков
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
})

// Валидация параметров
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}) {
  // Проверяем, что локаль поддерживается
  const { lang } = params

  if (!locales.includes(lang)) {
    return {
      title: "Modanatto - Premium Finishing Products in Laval, Canada",
      description:
        "Sale and installation of high-quality finishing products for your interior design projects in Laval and surrounding areas",
    }
  }

  const dictionary = await getDictionary(lang)

  return {
    title: "Modanatto - " + dictionary.hero.title,
    description: dictionary.hero.subtitle,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  // Получаем параметры
  const lang = params.lang

  // Проверяем, что локаль поддерживается
  if (!locales.includes(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning className={`${bebasNeue.variable} ${barlow.variable}`}>
      <body className="min-h-screen font-barlow antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header currentLocale={lang} dictionary={dictionary} />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-12">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <Image src="/modanatto-logo.webp" alt="Modanatto" width={120} height={30} className="h-auto" />
                      <span className="text-primary text-xs italic -mt-1">La Référence</span>
                    </div>
                    <p className="text-muted-foreground">{dictionary.about.description.substring(0, 120)}...</p>
                    <div className="flex items-center gap-4 pt-2">
                      <SocialIcons />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bebas uppercase">{dictionary.header.products}</h3>
                    <ul className="space-y-2">
                      {dictionary.products.items.slice(0, 4).map((product, index) => (
                        <li key={index}>
                          <Link
                            href={`/${lang}/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {product.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bebas uppercase">{dictionary.contact.title}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{dictionary.footer.address}</span>
                      </li>
                      <li className="flex items-start">
                        <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>123-456-7890</span>
                      </li>
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{dictionary.footer.email}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                  {dictionary.footer.copyright}
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
