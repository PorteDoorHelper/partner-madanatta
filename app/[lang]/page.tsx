import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getDictionary, type Locale, locales } from "@/lib/i18n"
import { notFound } from "next/navigation"

// Валидация параметров
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function Home({
  params,
}: {
  params: { lang: Locale }
}) {
  // Получаем параметры асинхронно
  const lang = params.lang

  // Проверяем, что локаль поддерживается
  if (!locales.includes(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image src="/hero-banner.png" alt="Modern interior" fill priority className="object-cover brightness-50" />
        <div className="container relative z-10 text-center px-4 py-12 md:py-16">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="mb-4">
              <Image
                src="/doorshop1-logo.webp"
                alt="Doorshop1"
                width={160}
                height={40}
                className="h-auto mx-auto"
                priority
              />
            </div>
            <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider">
              {dictionary.hero.title}
            </h1>
            <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider">
              <span className="red-underline">{dictionary.hero.subtitle}</span>
            </h2>
            <p className="font-bebas text-xl md:text-2xl uppercase tracking-wider">{dictionary.hero.location}</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-secondary" id="products">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-bebas text-3xl md:text-4xl uppercase tracking-wider">{dictionary.products.title}</h2>
            <p className="text-muted-foreground max-w-[800px]">{dictionary.products.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.products.items.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-md">
                <Image
                  src={getProductImage(product.title) || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="font-bebas text-xl uppercase tracking-wider">{product.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{product.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-primary text-primary hover:bg-primary hover:text-white font-bebas tracking-wider"
                    >
                      {dictionary.common.learnMore}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href={`/${lang}/products`}>
              <Button variant="default" size="lg" className="uppercase font-bebas tracking-wider">
                {dictionary.common.viewAll}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/showroom.png" alt="About Doorshop1" width={800} height={600} className="rounded-md" />
            </div>
            <div className="space-y-6">
              <h2 className="font-bebas text-3xl md:text-4xl uppercase tracking-wider">{dictionary.about.title}</h2>
              <p className="paragraph">{dictionary.about.description}</p>
              <ul className="space-y-3">
                {dictionary.about.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${lang}/about`}>
                <Button variant="outline" className="mt-4 font-bebas tracking-wider">
                  {dictionary.common.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="section bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="font-bebas text-3xl md:text-4xl uppercase tracking-wider">
                {dictionary.installation.title}
              </h2>
              <p className="paragraph">{dictionary.installation.description}</p>
              <ul className="space-y-3">
                {dictionary.installation.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/installation.png"
                alt="Professional Installation"
                width={800}
                height={600}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="font-bebas text-3xl md:text-4xl uppercase tracking-wider mb-6">
            {dictionary.contact.ctaTitle}
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto mb-8">{dictionary.contact.ctaText}</p>
          <Link href={`/${lang}/contact`}>
            <Button variant="default" size="lg" className="uppercase font-bebas tracking-wider">
              {dictionary.contact.ctaButton}
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

// Функция для получения изображения продукта по названию
function getProductImage(title: string): string {
  const titleLower = title.toLowerCase()

  if (titleLower.includes("ceramic") || titleLower.includes("carreaux")) {
    return "/ceramic-tiles.png"
  } else if (titleLower.includes("hardwood") || titleLower.includes("bois")) {
    return "/hardwood-flooring.png"
  } else if (titleLower.includes("vinyl") || titleLower.includes("vinyle")) {
    return "/vinyl-flooring.png"
  } else if (titleLower.includes("moulding") || titleLower.includes("moulures")) {
    return "/mouldings.png"
  } else if (titleLower.includes("door") || titleLower.includes("portes")) {
    return "/interior-doors.png"
  } else if (titleLower.includes("bathroom") || titleLower.includes("salle de bain")) {
    return "/bathroom-fixtures.png"
  } else {
    return "/abstract-geometric-shapes.png"
  }
}
