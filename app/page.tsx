import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default function RootPage() {
  // Получаем заголовки запроса
  const headersList = headers()
  const acceptLanguage = headersList.get("accept-language") || ""

  // Определяем язык пользователя
  let locale = "en" // По умолчанию английский

  if (acceptLanguage.includes("fr")) {
    locale = "fr"
  }

  // Перенаправляем на страницу с соответствующей локалью
  redirect(`/${locale}`)
}
