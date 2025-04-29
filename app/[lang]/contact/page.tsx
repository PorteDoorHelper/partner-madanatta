import { getDictionary, type Locale, locales } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang

  if (!locales.includes(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image src="/showroom.png" alt="Doorshop1 Showroom" fill priority className="object-cover brightness-50" />
        <div className="container relative z-10 text-center px-4">
          <h1 className="font-bebas text-4xl md:text-5xl uppercase tracking-wider">{dictionary.contact.title}</h1>
          <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">{dictionary.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-bebas text-2xl uppercase tracking-wider">{dictionary.contact.ctaTitle}</h2>
                <p className="text-muted-foreground">{dictionary.contact.ctaText}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-bebas uppercase tracking-wider">{dictionary.contact.address || "Address"}</h3>
                    <p className="text-muted-foreground">{dictionary.footer.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-bebas uppercase tracking-wider">{dictionary.contact.phone || "Phone"}</h3>
                    <p className="text-muted-foreground">123-456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-bebas uppercase tracking-wider">{dictionary.contact.email || "Email"}</h3>
                    <p className="text-muted-foreground">{dictionary.footer.email}</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full bg-muted rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178785.79510788924!2d-73.8150559!3d45.5576996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93f69b25cf4a3%3A0x42c5a5e5dbe8e883!2sLaval%2C%20QC!5e0!3m2!1sen!2sca!4v1682345678901!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-md">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bebas uppercase tracking-wider">
                    {dictionary.contact.form.name}
                  </Label>
                  <Input id="name" placeholder={dictionary.contact.form.namePlaceholder || "John Doe"} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bebas uppercase tracking-wider">
                    {dictionary.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={dictionary.contact.form.emailPlaceholder || "john@example.com"}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-bebas uppercase tracking-wider">
                    {dictionary.contact.form.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={dictionary.contact.form.phonePlaceholder || "(123) 456-7890"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bebas uppercase tracking-wider">
                    {dictionary.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder={dictionary.contact.form.messagePlaceholder || "How can we help you?"}
                    required
                  />
                </div>

                <Button type="submit" className="w-full font-bebas uppercase tracking-wider">
                  {dictionary.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
