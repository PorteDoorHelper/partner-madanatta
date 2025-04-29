import { type NextRequest, NextResponse } from "next/server"
import { locales } from "@/lib/i18n"

export function middleware(request: NextRequest) {
  // Получаем текущий путь
  const pathname = request.nextUrl.pathname

  // Проверяем, содержит ли путь уже локаль
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // Если путь уже содержит локаль, пропускаем
  if (pathnameHasLocale) return NextResponse.next()

  // Проверяем, не является ли путь статическим файлом или API
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next()
  }

  // Получаем предпочтительную локаль из заголовка Accept-Language
  // или используем локаль по умолчанию
  const acceptLanguage = request.headers.get("accept-language") || ""
  let locale = "en" // Локаль по умолчанию - английский

  // Простое определение языка - только французский или английский
  if (acceptLanguage.includes("fr")) {
    locale = "fr"
  }

  // Перенаправляем на путь с локалью
  return NextResponse.redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url))
}

export const config = {
  // Исключаем все внутренние пути (_next) и статические файлы
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
