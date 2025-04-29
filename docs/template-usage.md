# Руководство по использованию шаблона в новых проектах

Это руководство поможет вам использовать созданный шаблон DoorPartner как основу для новых проектов.

## Содержание

1. [Создание нового проекта на основе шаблона](#создание-нового-проекта-на-основе-шаблона)
2. [Настройка базовых параметров](#настройка-базовых-параметров)
3. [Изменение темы](#изменение-темы)
4. [Настройка локализации](#настройка-локализации)
5. [Добавление новых страниц](#добавление-новых-страниц)
6. [Кастомизация компонентов](#кастомизация-компонентов)
7. [Расширение функциональности](#расширение-функциональности)

## Создание нового проекта на основе шаблона

### Метод 1: Клонирование репозитория

1. Клонируйте репозиторий шаблона:
   \`\`\`bash
   git clone https://github.com/your-username/door-dealership.git new-project-name
   \`\`\`

2. Удалите связь с оригинальным репозиторием:
   \`\`\`bash
   cd new-project-name
   rm -rf .git
   git init
   \`\`\`

3. Установите зависимости:
   \`\`\`bash
   npm install
   \`\`\`

### Метод 2: Копирование файлов

1. Создайте новый проект Next.js:
   \`\`\`bash
   npx create-next-app@latest new-project-name
   \`\`\`

2. Скопируйте ключевые файлы и директории из шаблона:
   - `app/` (структура и компоненты)
   - `components/` (переиспользуемые компоненты)
   - `lib/` (утилиты и конфигурации)
   - `messages/` (файлы локализации)
   - `docs/` (документация)
   - `middleware.ts` (обработка локализации)
   - `tailwind.config.ts` (конфигурация Tailwind)

3. Установите дополнительные зависимости:
   \`\`\`bash
   npm install next-themes tailwindcss-animate
   \`\`\`

## Настройка базовых параметров

### Изменение названия и описания проекта

1. Обновите файл `package.json`:
   \`\`\`json
   {
     "name": "your-project-name",
     "description": "Your project description"
   }
   \`\`\`

2. Обновите метаданные в `app/[lang]/layout.tsx`:
   \`\`\`typescript
   export async function generateMetadata({ params }: { params: { lang: Locale } }) {
     // ...
     return {
       title: "Your Project Name - " + dictionary.hero.title,
       description: dictionary.hero.subtitle,
     }
   }
   \`\`\`

### Настройка базового URL и других параметров

1. Создайте или обновите файл `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_COMPANY_NAME=Your Company Name
   \`\`\`

2. Создайте файл `lib/config.ts` для централизованного хранения конфигурации:
   \`\`\`typescript
   export const siteConfig = {
     name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Company",
     url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
     // Другие параметры конфигурации
   }
   \`\`\`

## Изменение темы

### Изменение цветовой схемы

1. Отредактируйте файл `lib/theme.ts`:
   \`\`\`typescript
   export const colors = {
     primary: {
       DEFAULT: "#YOUR_PRIMARY_COLOR",
       light: "#YOUR_PRIMARY_LIGHT",
       dark: "#YOUR_PRIMARY_DARK",
     },
     // Другие цвета...
   }
   \`\`\`

2. Обновите CSS переменные в `app/globals.css`:
   \`\`\`css
   :root {
     --primary: YOUR_HSL_VALUES;
     --secondary: YOUR_HSL_VALUES;
     /* Другие переменные... */
   }
   \`\`\`

### Изменение шрифтов

1. Импортируйте новые шрифты в `app/[lang]/layout.tsx`:
   \`\`\`typescript
   import { Roboto } from 'next/font/google'

   const roboto = Roboto({
     subsets: ["latin"],
     weight: ["400", "500", "700"],
     display: "swap",
     variable: "--font-sans",
   })
   \`\`\`

2. Обновите шрифты в `lib/theme.ts`:
   \`\`\`typescript
   export const typography = {
     fontFamily: {
       sans: ["Roboto", "sans-serif"],
       // Другие шрифты...
     },
     // Другие настройки типографики...
   }
   \`\`\`

### Создание новой темы

1. Создайте файл `lib/themes/custom-theme.ts`:
   \`\`\`typescript
   import { theme as baseTheme } from "../theme"

   export const customTheme = {
     ...baseTheme,
     colors: {
       // Ваши цвета
     },
     typography: {
       // Ваши настройки типографики
     },
     // Другие настройки...
   }
   \`\`\`

2. Добавьте новую тему в `components/theme-switcher.tsx`.

## Настройка локализации

### Изменение доступных языков

1. Обновите файл `lib/i18n.ts`:
   \`\`\`typescript
   const dictionaries = {
     en: () => import("@/messages/en.json").then((module) => module.default),
     de: () => import("@/messages/de.json").then((module) => module.default),
     // Добавьте или удалите языки
   }
   \`\`\`

2. Создайте файлы локализации для новых языков в директории `messages/`.

3. Обновите компонент `LanguageSwitcher` в `components/language-switcher.tsx`.

### Изменение текстов

1. Отредактируйте файлы локализации в директории `messages/`:
   \`\`\`json
   {
     "header": {
       "title": "Your Company Name",
       // Другие тексты...
     },
     // Другие секции...
   }
   \`\`\`

## Добавление новых страниц

### Создание новой страницы

1. Создайте файл `app/[lang]/your-page/page.tsx`:
   \`\`\`typescript
   import { getDictionary, type Locale, locales } from "@/lib/i18n"
   import { notFound } from "next/navigation"

   export async function generateStaticParams() {
     return locales.map((lang) => ({ lang }))
   }

   export default async function YourPage({ params }: { params: { lang: Locale } }) {
     const lang = params.lang as Locale
     if (!locales.includes(lang)) {
       notFound()
     }

     const dictionary = await getDictionary(lang)

     return (
       <div className="container px-4 py-12 md:px-6 md:py-24">
         <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
           Your Page Title
         </h1>
         <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
           Your page content
         </p>
       </div>
     )
   }
   \`\`\`

2. Добавьте переводы для новой страницы в файлы локализации.

### Добавление страницы в навигацию

1. Обновите компонент `Header` в `components/header.tsx`:
   \`\`\`typescript
   <nav className="hidden md:flex gap-6">
     <Link href={`/${currentLocale}/your-page`} className="text-sm font-medium hover:underline underline-offset-4">
       {dictionary.header.yourPage}
     </Link>
     {/* Другие ссылки... */}
   </nav>
   \`\`\`

2. Обновите компонент `MobileMenu` в `components/mobile-menu.tsx`.

## Кастомизация компонентов

### Изменение существующих компонентов

1. Найдите компонент, который хотите изменить, в директории `components/`.
2. Внесите необходимые изменения в код компонента.
3. При необходимости обновите стили в `app/globals.css` или в самом компоненте.

### Создание новых компонентов

1. Создайте новый файл в директории `components/`:
   \`\`\`typescript
   // components/your-component.tsx
   import { theme } from "@/lib/theme"

   interface YourComponentProps {
     title: string
     description: string
   }

   export function YourComponent({ title, description }: YourComponentProps) {
     return (
       <div className="p-4 border rounded-md">
         <h3 className="text-xl font-bold">{title}</h3>
         <p className="mt-2 text-muted-foreground">{description}</p>
       </div>
     )
   }
   \`\`\`

2. Импортируйте и используйте компонент в нужных местах:
   \`\`\`typescript
   import { YourComponent } from "@/components/your-component"

   // ...

   <YourComponent title="Your Title" description="Your description" />
   \`\`\`

## Расширение функциональности

### Добавление API-маршрутов

1. Создайте файл `app/api/your-endpoint/route.ts`:
   \`\`\`typescript
   import { NextResponse } from "next/server"

   export async function GET(request: Request) {
     // Ваша логика обработки запроса
     return NextResponse.json({ message: "Hello from API" })
   }

   export async function POST(request: Request) {
     const data = await request.json()
     // Обработка данных
     return NextResponse.json({ success: true, data })
   }
   \`\`\`

### Добавление серверных действий (Server Actions)

1. Создайте файл `app/actions.ts`:
   \`\`\`typescript
   "use server"

   export async function yourServerAction(formData: FormData) {
     // Валидация данных
     const name = formData.get("name") as string
     const email = formData.get("email") as string

     // Обработка данных
     // ...

     return { success: true, message: "Form submitted successfully" }
   }
   \`\`\`

2. Используйте серверное действие в форме:
   \`\`\`typescript
   import { yourServerAction } from "@/app/actions"

   // ...

   <form action={yourServerAction}>
     <input type="text" name="name" required />
     <input type="email" name="email" required />
     <button type="submit">Submit</button>
   </form>
   \`\`\`

### Интеграция с базой данных

1. Установите необходимые пакеты:
   \`\`\`bash
   npm install @prisma/client
   npm install -D prisma
   \`\`\`

2. Инициализируйте Prisma:
   \`\`\`bash
   npx prisma init
   \`\`\`

3. Настройте модели в `prisma/schema.prisma`.

4. Создайте файл `lib/db.ts`:
   \`\`\`typescript
   import { PrismaClient } from "@prisma/client"

   const globalForPrisma = global as unknown as { prisma: PrismaClient }

   export const prisma =
     globalForPrisma.prisma ||
     new PrismaClient({
       log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
     })

   if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
   \`\`\`

5. Используйте Prisma в API-маршрутах или серверных действиях.

## Заключение

Этот шаблон предоставляет гибкую основу для создания различных веб-приложений. Вы можете адаптировать его под свои нужды, изменяя тему, локализацию, компоненты и функциональность. Следуйте принципам, описанным в документации, чтобы сохранить структуру и масштабируемость проекта.

Если у вас возникнут вопросы или проблемы при использовании шаблона, обратитесь к документации или создайте issue в репозитории проекта.
