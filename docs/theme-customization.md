# Руководство по настройке темы

Этот документ описывает, как изменять параметры темы или создавать новые темы в проекте DoorPartner.

## Содержани��

1. [Структура темы](#структура-темы)
2. [Изменение параметров темы](#изменение-параметров-темы)
3. [Создание новой темы](#создание-новой-темы)
4. [Переключение между темами](#переключение-между-темами)
5. [Примеры использования](#примеры-использования)

## Структура темы

Основные файлы, отвечающие за тему:

- `lib/theme.ts` - основной файл с настройками темы
- `tailwind.config.ts` - конфигурация Tailwind CSS, использующая настройки из theme.ts
- `app/globals.css` - глобальные стили и CSS переменные
- `components/theme-provider.tsx` - провайдер темы для переключения между светлой и темной темами

### Структура файла theme.ts

Файл `lib/theme.ts` содержит следующие разделы:

\`\`\`typescript
// Основные цвета темы
export const colors = { ... }

// Настройки типографики
export const typography = { ... }

// Настройки макета
export const layout = { ... }

// Настройки анимации
export const animation = { ... }

// Настройки теней
export const shadows = { ... }

// Настройки брейкпоинтов
export const breakpoints = { ... }

// Экспорт всех настроек темы
export const theme = {
  colors,
  typography,
  layout,
  animation,
  shadows,
  breakpoints,
}
\`\`\`

## Изменение параметров темы

### Изменение цветов

Для изменения цветов темы отредактируйте объект `colors` в файле `lib/theme.ts`:

\`\`\`typescript
export const colors = {
  primary: {
    DEFAULT: "#0070f3", // Измените на нужный цвет
    light: "#3291ff",
    dark: "#0761d1",
  },
  // Другие цвета...
}
\`\`\`

### Изменение шрифтов

Для изменения шрифтов отредактируйте объект `typography` в файле `lib/theme.ts`:

\`\`\`typescript
export const typography = {
  fontFamily: {
    sans: ["Inter", "sans-serif"], // Измените на нужный шрифт
    serif: ["Georgia", "serif"],
    mono: ["Menlo", "Monaco", "Courier New", "monospace"],
  },
  // Другие настройки типографики...
}
\`\`\`

После изменения шрифта в `theme.ts`, не забудьте обновить импорт шрифта в `app/[lang]/layout.tsx`:

\`\`\`typescript
import { Cute_Font as YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

// И добавьте переменную шрифта в className для html
<html lang={lang} suppressHydrationWarning className={yourFont.variable}>
\`\`\`

### Изменение отступов и размеров

Для изменения отступов и размеров отредактируйте объект `layout` в файле `lib/theme.ts`:

\`\`\`typescript
export const layout = {
  containerMaxWidth: "1400px", // Измените на нужный размер
  spacing: {
    xs: "0.25rem",
    // Другие отступы...
  },
  // Другие настройки макета...
}
\`\`\`

### Изменение CSS переменных

Для изменения CSS переменных отредактируйте файл `app/globals.css`:

\`\`\`css
@layer base {
  :root {
    --primary: 221.2 83.2% 53.3%; /* Измените на нужный цвет в формате HSL */
    --container-width: 1400px; /* Измените на нужный размер */
    /* Другие переменные... */
  }
}
\`\`\`

## Создание новой темы

### 1. Создайте новый файл темы

Создайте новый файл, например, `lib/themes/dark-blue.ts`:

\`\`\`typescript
import { theme as baseTheme } from "../theme"

// Клонируем базовую тему
export const darkBlueTheme = { ...baseTheme }

// Переопределяем нужные параметры
darkBlueTheme.colors = {
  ...baseTheme.colors,
  primary: {
    DEFAULT: "#1e3a8a",
    light: "#3151b1",
    dark: "#0f2a6f",
  },
  // Другие цвета...
}

export default darkBlueTheme
\`\`\`

### 2. Создайте CSS переменные для новой темы

В файле `app/globals.css` добавьте новые CSS переменные:

\`\`\`css
.theme-dark-blue {
  --primary: 222 47% 33%;
  --primary-foreground: 210 40% 98%;
  /* Другие переменные... */
}
\`\`\`

### 3. Обновите ThemeProvider

Обновите компонент `ThemeProvider` для поддержки новой темы:

\`\`\`typescript
// components/theme-provider.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "dark-blue" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  // Реализация провайдера...
}
\`\`\`

## Переключение между темами

### Создание компонента переключателя тем

Создайте или обновите компонент `ThemeSwitcher`:

\`\`\`typescript
// components/theme-switcher.tsx
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Laptop } from 'lucide-react'

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-blue")}>
          Dark Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
\`\`\`

## Примеры использования

### Использование переменных темы в компонентах

\`\`\`typescript
// components/custom-button.tsx
import { theme } from "@/lib/theme"

export function CustomButton({ children }) {
  return (
    <button
      style={{
        backgroundColor: theme.colors.primary.DEFAULT,
        padding: theme.layout.spacing.md,
        borderRadius: theme.layout.borderRadius.md,
        transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.easeInOut}`,
      }}
    >
      {children}
    </button>
  )
}
\`\`\`

### Использование Tailwind классов

\`\`\`tsx
<div className="bg-brand text-white p-4 rounded-md shadow-md">
  Этот блок использует цвета бренда из темы
</div>
\`\`\`

### Использование CSS переменных

\`\`\`tsx
<div style={{ 
  backgroundColor: 'hsl(var(--primary))',
  color: 'hsl(var(--primary-foreground))',
  padding: 'var(--spacing-md)',
  borderRadius: 'var(--radius)'
}}>
  Этот блок использует CSS переменные из темы
</div>
\`\`\`

### Использование кастомных классов

\`\`\`tsx
<h1 className="heading-1">Заголовок первого уровня</h1>
<p className="paragraph">Параграф текста</p>
<div className="section">Секция с правильными отступами</div>
\`\`\`

## Лучшие практики

1. **Централизация изменений**: Всегда вносите изменения в тему через файл `lib/theme.ts`
2. **Согласованность**: Используйте переменные темы вместо жестко закодированных значений
3. **Тестирование**: Проверяйте изменения темы на разных устройствах и в разных браузерах
4. **Доступность**: Убедитесь, что цветовые контрасты соответствуют стандартам WCAG
5. **Документация**: Документируйте изменения в теме для других разработчиков

## Дополнительные ресурсы

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
