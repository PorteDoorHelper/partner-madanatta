"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"

interface MobileMenuProps {
  dictionary: Dictionary
}

export function MobileMenu({ dictionary }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="md:hidden h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="w-full sm:w-3/4">
        <SheetHeader>
          <SheetTitle>{dictionary.header.title}</SheetTitle>
          <SheetDescription>Navigate through the site.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
            {dictionary.header.benefits}
          </Link>
          <Link href="#storefront" className="text-sm font-medium hover:underline underline-offset-4">
            {dictionary.header.storefront}
          </Link>
          <Link href="#dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            {dictionary.header.dashboard}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            {dictionary.header.contact}
          </Link>
          <Link href="#demo-catalog" className="text-sm font-medium hover:underline underline-offset-4">
            {dictionary.demo.catalogDemo}
          </Link>
          <Link href="#demo-shop" className="text-sm font-medium hover:underline underline-offset-4">
            {dictionary.demo.storeDemo}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
