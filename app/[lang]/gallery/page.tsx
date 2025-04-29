import Image from "next/image"
import { getDictionary, type Locale, locales } from "@/lib/i18n"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function GalleryPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang

  if (!locales.includes(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)

  // Изображения для галереи
  const images = [
    { id: 1, src: "/gallery-1.png" },
    { id: 2, src: "/gallery-2.png" },
    { id: 3, src: "/gallery-3.png" },
    { id: 4, src: "/gallery-4.png" },
    { id: 5, src: "/showroom.png" },
    { id: 6, src: "/installation.png" },
  ]

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image src="/about-bg.png" alt="Gallery" fill priority className="object-cover brightness-50" />
        <div className="container relative z-10 text-center px-4">
          <h1 className="font-bebas text-4xl md:text-5xl uppercase tracking-wider">{dictionary.gallery.title}</h1>
          <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">{dictionary.gallery.subtitle}</p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.gallery.projects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-md bg-secondary">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={images[index].src || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bebas text-xl tracking-wider">{project.title}</h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
