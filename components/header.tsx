"use client"
import Link from "next/link"
import { Phone } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileMenu } from "@/components/mobile-menu"
import type { Locale, Dictionary } from "@/lib/i18n"
import { SocialIcons } from "@/components/social-icons"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface HeaderProps {
  currentLocale: Locale
  dictionary: Dictionary
}

export function Header({ currentLocale, dictionary }: HeaderProps) {
  const pathname = usePathname()
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const isActive = (path: string) => {
    return pathname === `/${currentLocale}${path}` || (path === "" && pathname === `/${currentLocale}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY <= 10)
      setLastScrollY(currentScrollY)
    }

    // Инициализация состояния при монтировании
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileMenu dictionary={dictionary} />
          <Link href={`/${currentLocale}`} className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-bebas text-3xl tracking-wider">MADANATTA</span>
              <span className="text-primary text-xs italic -mt-1">La Référence</span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href={`/${currentLocale}`}
            className={cn(
              "text-base font-semibold font-bebas uppercase tracking-wider transition-colors",
              isActive("") ? "text-primary" : "hover:text-primary",
            )}
          >
            {dictionary.header.home}
          </Link>
          <Link
            href={`/${currentLocale}/products`}
            className={cn(
              "text-base font-semibold font-bebas uppercase tracking-wider transition-colors",
              isActive("/products") ? "text-primary" : "hover:text-primary",
            )}
          >
            {dictionary.header.products}
          </Link>
          <Link
            href={`/${currentLocale}/gallery`}
            className={cn(
              "text-base font-semibold font-bebas uppercase tracking-wider transition-colors",
              isActive("/gallery") ? "text-primary" : "hover:text-primary",
            )}
          >
            {dictionary.header.gallery}
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            className={cn(
              "text-base font-semibold font-bebas uppercase tracking-wider transition-colors",
              isActive("/contact") ? "text-primary" : "hover:text-primary",
            )}
          >
            {dictionary.header.contact}
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_DOOR_CATALOG_URL}/${currentLocale}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold font-bebas uppercase tracking-wider hover:text-primary transition-colors"
          >
            {dictionary.common.interiordoors}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div
            className={cn(
              "transition-all duration-300 ease-in-out overflow-hidden",
              isAtTop ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0",
            )}
          >
            <SocialIcons />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <a
              href="tel:123-456-7890"
              className="text-base font-semibold text-primary hover:underline transition-all cursor-pointer"
            >
              123-456-7890
            </a>
          </div>
          <div
            className={cn(
              "transition-all duration-300 ease-in-out overflow-hidden",
              isAtTop ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0",
            )}
          >
            <LanguageSwitcher currentLocale={currentLocale} dictionary={dictionary} />
          </div>
        </div>
      </div>
    </header>
  )
}
