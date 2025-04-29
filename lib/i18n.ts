import "server-only"

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  fr: () => import("@/messages/fr.json").then((module) => module.default),
}

export type Locale = keyof typeof dictionaries
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>

export const locales = Object.keys(dictionaries) as Locale[]

export const getDictionary = async (locale: Locale) => {
  try {
    return dictionaries[locale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error)
    // Fallback to English if the requested locale is not available
    return dictionaries.en()
  }
}
