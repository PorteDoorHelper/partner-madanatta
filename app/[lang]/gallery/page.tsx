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

  // Обновляем массив изображений для галереи с более подробной информацией
  const galleryImages = [
    {
      id: 1,
      src: "/gallery-1.png",
      alt: "Современная кухня с керамической плиткой",
      width: 800,
      height: 600,
    },
    {
      id: 2,
      src: "/gallery-2.png",
      alt: "Элегантная ванная комната с премиальной отделкой",
      width: 800,
      height: 600,
    },
    {
      id: 3,
      src: "/gallery-3.png",
      alt: "Современная гостиная с деревянным полом",
      width: 800,
      height: 600,
    },
    {
      id: 4,
      src: "/gallery-4.png",
      alt: "Офисное пространство с виниловым полом",
      width: 800,
      height: 600,
    },
    {
      id: 5,
      src: "/showroom.png",
      alt: "Шоурум Doorshop1 с образцами материалов",
      width: 800,
      height: 600,
    },
    {
      id: 6,
      src: "/installation.png",
      alt: "Процесс профессиональной установки",
      width: 800,
      height: 600,
    },
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
          {/* Обновляем секцию с проектами, чтобы использовать новые изображения */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.gallery.projects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-md bg-secondary">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={galleryImages[index].src || "/placeholder.svg"}
                    alt={galleryImages[index].alt || project.title}
                    width={galleryImages[index].width}
                    height={galleryImages[index].height}
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

      {/* Добавляем новую секцию с полноразмерными изображениями */}
      <section className="py-12 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="font-bebas text-3xl md:text-4xl uppercase tracking-wider text-center mb-12">
            {dictionary.gallery.title} - {dictionary.common.viewAll}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-md">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
