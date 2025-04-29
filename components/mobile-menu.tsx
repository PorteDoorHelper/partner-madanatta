"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"
import { SocialIcons } from "@/components/social-icons"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  dictionary: Dictionary
}

export function MobileMenu({ dictionary }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const currentLocale = pathname.split("/")[1]

  const isActive = (path: string) => {
    return pathname === `/${currentLocale}${path}` || (path === "" && pathname === `/${currentLocale}`)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="lg:hidden h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-sm bg-background">
        <SheetHeader>
          <SheetTitle className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <Image src="/doorshop1-logo.webp" alt="Doorshop1" width={150} height={35} className="h-auto" priority />
            </div>
            <span className="text-primary text-xs italic -mt-1">La Référence</span>
          </SheetTitle>
          <SheetDescription>{dictionary.header.menuDescription}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <Link
            href={`/${currentLocale}`}
            className={cn(
              "text-base font-normal font-barlow uppercase tracking-[0.48px] leading-6 px-2.5 transition-colors duration-200 ease-out",
              isActive("") ? "text-primary" : "hover:text-primary",
            )}
            onClick={() => setOpen(false)}
          >
            {dictionary.header.home}
          </Link>
          <Link
            href={`/${currentLocale}/products`}
            className={cn(
              "text-base font-normal font-barlow uppercase tracking-[0.48px] leading-6 px-2.5 transition-colors duration-200 ease-out",
              isActive("/products") ? "text-primary" : "hover:text-primary",
            )}
            onClick={() => setOpen(false)}
          >
            {dictionary.header.products}
          </Link>
          <Link
            href={`/${currentLocale}/gallery`}
            className={cn(
              "text-base font-normal font-barlow uppercase tracking-[0.48px] leading-6 px-2.5 transition-colors duration-200 ease-out",
              isActive("/gallery") ? "text-primary" : "hover:text-primary",
            )}
            onClick={() => setOpen(false)}
          >
            {dictionary.header.gallery}
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            className={cn(
              "text-base font-normal font-barlow uppercase tracking-[0.48px] leading-6 px-2.5 transition-colors duration-200 ease-out",
              isActive("/contact") ? "text-primary" : "hover:text-primary",
            )}
            onClick={() => setOpen(false)}
          >
            {dictionary.header.contact}
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_DOOR_CATALOG_URL}/${currentLocale}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-normal font-barlow uppercase tracking-[0.48px] leading-6 px-2.5 transition-colors duration-200 ease-out hover:text-primary"
            onClick={() => setOpen(false)}
          >
            {dictionary.common.interiordoors}
          </a>

          <div className="flex items-center gap-2 pt-4">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:123-456-7890" className="text-sm text-primary hover:underline transition-all cursor-pointer">
              123-456-7890
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <SocialIcons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
