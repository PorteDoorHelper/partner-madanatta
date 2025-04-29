import Image from "next/image"
import Link from "next/link"
import { getDictionary, type Locale, locales } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function ProductsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang

  // Получаем URL каталога из переменной окружения или используем значение по умолчанию
  const doorCatalogBaseUrl = process.env.NEXT_PUBLIC_DOOR_CATALOG_URL || "https://store.doorshop1.xyz"

  if (!locales.includes(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)

  return (
    <>
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="font-bebas text-4xl md:text-5xl uppercase tracking-wider">{dictionary.products.title}</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">{dictionary.products.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.products.items.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-md bg-secondary">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={getProductImage(product.title) || "/placeholder.svg"}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <a href={`${doorCatalogBaseUrl}/${lang}`} target="_blank" rel="noopener noreferrer" className="block">
                    <h3 className="font-bebas text-xl uppercase tracking-wider">{product.title}</h3>
                    <p className="mt-2 text-muted-foreground">{product.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-primary text-primary hover:bg-primary hover:text-white font-bebas tracking-wider"
                    >
                      {dictionary.common.learnMore}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
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
