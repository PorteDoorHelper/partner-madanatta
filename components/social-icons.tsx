"use client"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, PinIcon as Pinterest, Youtube } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Pinterest className="h-5 w-5" />
        <span className="sr-only">Pinterest</span>
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Youtube className="h-5 w-5" />
        <span className="sr-only">YouTube</span>
      </Link>
    </div>
  )
}
