"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import type { Locale, Dictionary } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  dictionary: Dictionary
}

export function LanguageSwitcher({ currentLocale, dictionary }: LanguageSwitcherProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const switchLanguage = (locale: string) => {
    // Get the current path without the locale
    const currentPath = window.location.pathname
    const pathWithoutLocale = currentPath.replace(/^\/(en|fr)/, "")

    // Navigate to the same path but with the new locale
    router.push(`/${locale}${pathWithoutLocale}`)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")} className={currentLocale === "en" ? "bg-muted" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("fr")} className={currentLocale === "fr" ? "bg-muted" : ""}>
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
