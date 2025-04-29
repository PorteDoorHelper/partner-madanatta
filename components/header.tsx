"use client"
import { Store } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeSwitcher } from "@/components/theme-switcher"
import type { Locale, Dictionary } from "@/lib/i18n"

interface HeaderProps {
  currentLocale: Locale
  dictionary: Dictionary
}

export function Header({ currentLocale, dictionary }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileMenu dictionary={dictionary} />
          <div className="flex items-center gap-2">
            <Store className="h-6 w-6" />
            <span className="text-xl font-bold">{dictionary.header.title}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher currentLocale={currentLocale} dictionary={dictionary} />
        </div>
      </div>
    </header>
  )
}
