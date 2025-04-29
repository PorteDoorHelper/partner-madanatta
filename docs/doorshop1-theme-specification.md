# Madanatta Theme - Полная спецификация

Этот документ содержит полную спецификацию темы Madanatta, включая цвета, шрифты, размеры, компоненты и анимации. Используйте эту спецификацию для создания идентичной темы в новых проектах.

## Содержание

1. [Цветовая схема](#цветовая-схема)
2. [Типографика](#типографика)
3. [Размеры и отступы](#размеры-и-отступы)
4. [Компоненты](#компоненты)
5. [Анимации](#анимации)
6. [Хедер](#хедер)
7. [Футер](#футер)
8. [Адаптивность](#адаптивность)
9. [Темная тема](#темная-тема)
10. [Логотип](#логотип)

## Цветовая схема

### Основные цвета

\`\`\`typescript
// Основные цвета темы
export const colors = {
  primary: {
    DEFAULT: "rgba(247, 11, 36, 1)", // Красный цвет
    light: "#f73d5b",
    dark: "#d00a24",
  },
  secondary: {
    DEFAULT: "#7928ca",
    light: "#8a3fd1",
    dark: "#6622aa",
  },
  accent: {
    DEFAULT: "#f5a623",
    light: "#f7b955",
    dark: "#e09612",
  },
  background: {
    DEFAULT: "#ffffff",
    dark: "#111111",
  },
  text: {
    DEFAULT: "#333333",
    light: "#666666",
    dark: "#ffffff",
  },
  border: {
    DEFAULT: "#eaeaea",
    dark: "#333333",
  },
}
\`\`\`

### CSS переменные

\`\`\`css
:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;

  --card: 0 0% 5%;
  --card-foreground: 0 0% 100%;

  --popover: 0 0% 5%;
  --popover-foreground: 0 0% 100%;

  --primary: 353 95% 51%;
  --primary-foreground: 0 0% 100%;

  --secondary: 0 0% 15%;
  --secondary-foreground: 0 0% 100%;

  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 70%;

  --accent: 0 0% 15%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 100%;

  --border: 0 0% 20%;
  --input: 0 0% 20%;
  --ring: 353 95% 51%;

  --radius: 0.25rem;
}

.dark {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;

  --card: 0 0% 5%;
  --card-foreground: 0 0% 100%;

  --popover: 0 0% 5%;
  --popover-foreground: 0 0% 100%;

  --primary: 353 95% 51%;
  --primary-foreground: 0 0% 100%;

  --secondary: 0 0% 15%;
  --secondary-foreground: 0 0% 100%;

  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 70%;

  --accent: 0 0% 15%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 100%;

  --border: 0 0% 20%;
  --input: 0 0% 20%;
  --ring: 353 95% 51%;
}
\`\`\`

## Типографика

### Шрифты

\`\`\`typescript
// Используем шрифт Barlow для основного текста
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-barlow",
})

// Используем Bebas Neue для заголовков
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
})
\`\`\`

### Настройки типографики

\`\`\`typescript
export const typography = {
  fontFamily: {
    sans: ["Barlow", "Barlow Fallback", "sans-serif"],
    serif: ["Georgia", "serif"],
    mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    bebas: ["Bebas Neue", "sans-serif"],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
}
\`\`\`

### CSS классы для типографики

\`\`\`css
.font-bebas {
  font-family: var(--font-bebas);
}

.font-barlow {
  font-family: var(--font-barlow);
}

.heading-1 {
  @apply text-4xl font-bebas tracking-tight md:text-5xl lg:text-6xl;
}

.heading-2 {
  @apply text-3xl font-bebas tracking-tight md:text-4xl;
}

.heading-3 {
  @apply text-2xl font-bebas tracking-tight md:text-3xl;
}

.heading-4 {
  @apply text-xl font-bebas tracking-tight md:text-2xl;
}

.paragraph {
  @apply text-base leading-7 [&:not(:first-child)]:mt-6;
}

.hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-center;
}

.hero-subtitle {
  @apply text-2xl md:text-3xl lg:text-4xl font-bebas uppercase tracking-wide text-center;
}

.hero-location {
  @apply text-xl md:text-2xl font-bebas uppercase tracking-wide text-center mt-4;
}

.red-underline {
  @apply relative inline-block;
}

.red-underline::after {
  content: "";
  @apply absolute bottom-0 left-1/2 w-3/4 h-0.5 bg-primary transform -translate-x-1/2;
}
\`\`\`

## Размеры и отступы

\`\`\`typescript
export const layout = {
  containerMaxWidth: "1400px",
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  borderRadius: {
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
}
\`\`\`

### CSS переменные для размеров

\`\`\`css
:root {
  --container-width: 1400px;
  --header-height: 5rem;
  --header-height-scrolled: 4rem;
  --footer-height: 4rem;
}
\`\`\`

### CSS классы для секций

\`\`\`css
.section {
  @apply py-12 md:py-16 lg:py-24;
}

.container-wide {
  @apply container max-w-[var(--container-width)];
}
\`\`\`

## Компоненты

### Кнопки

\`\`\`tsx
<Button variant="default" size="lg" className="uppercase font-bebas tracking-wider">
  {dictionary.common.viewAll}
</Button>

<Button variant="outline" className="mt-4 font-bebas tracking-wider">
  {dictionary.common.learnMore}
</Button>
\`\`\`

### Карточки продуктов

\`\`\`tsx
<div className="group relative overflow-hidden rounded-md">
  <Image
    src={getProductImage(product.title) || "/placeholder.svg"}
    alt={product.title}
    width={600}
    height={400}
    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="text-center p-4">
      <h3 className="font-bebas text-xl uppercase tracking-wider">{product.title}</h3>
      <p className="mt-2 text-sm text-gray-300">{product.description}</p>
      <Button
        variant="outline"
        size="sm"
        className="mt-4 border-primary text-primary hover:bg-primary hover:text-white font-bebas tracking-wider"
      >
        {dictionary.common.learnMore}
      </Button>
    </div>
  </div>
</div>
\`\`\`

### Списки с маркерами

\`\`\`tsx
<ul className="space-y-3">
  {features.map((feature, index) => (
    <li key={index} className="flex items-start">
      <div className="mr-2 mt-1 h-2 w-2 bg-primary rounded-full"></div>
      <span>{feature}</span>
    </li>
  ))}
</ul>
\`\`\`

### Формы

\`\`\`tsx
<form className="space-y-6">
  <div className="space-y-2">
    <Label htmlFor="name" className="font-bebas uppercase tracking-wider">
      {dictionary.contact.form.name}
    </Label>
    <Input id="name" placeholder={dictionary.contact.form.namePlaceholder || "John Doe"} required />
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="email" className="font-bebas uppercase tracking-wider">
      {dictionary.contact.form.email}
    </Label>
    <Input
      id="email"
      type="email"
      placeholder={dictionary.contact.form.emailPlaceholder || "john@example.com"}
      required
    />
  </div>
  
  <Button type="submit" className="w-full font-bebas uppercase tracking-wider">
    {dictionary.contact.form.submit}
  </Button>
</form>
\`\`\`

## Анимации

\`\`\`typescript
export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
}
\`\`\`

### CSS переменные для анимаций

\`\`\`css
:root {
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
}
\`\`\`

### CSS классы для анимаций

\`\`\`css
/* Плавная анимация для хедера */
.header-element-show {
  @apply opacity-100 max-w-[200px] transition-all duration-300 ease-in-out;
}

.header-element-hide {
  @apply opacity-0 max-w-0 transition-all duration-300 ease-in-out overflow-hidden;
}

/* Стили для анимации хедера */
.header-shrink {
  @apply h-16 transition-all duration-300 ease-in-out;
}

.header-expand {
  @apply h-20 transition-all duration-300 ease-in-out;
}

.logo-shrink {
  @apply scale-90 transition-all duration-300 ease-in-out;
}

.logo-expand {
  @apply scale-100 transition-all duration-300 ease-in-out;
}
\`\`\`

## Хедер

### Структура хедера

\`\`\`tsx
<header
  className={cn(
    "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
    isAtTop ? "h-20" : "h-16",
  )}
>
  <div
    className={cn(
      "container flex items-center justify-between transition-all duration-300",
      isAtTop ? "h-20" : "h-16",
    )}
  >
    <div className="flex items-center gap-4">
      <MobileMenu dictionary={dictionary} />
      <Link href={`/${currentLocale}`} className="flex items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/doorshop1-logo.webp"
            alt="Doorshop1"
            width={isAtTop ? 180 : 140}
            height={isAtTop ? 40 : 30}
            className="h-auto transition-all duration-300"
            priority
          />
        </div>
      </Link>
    </div>

    <nav className="hidden lg:flex items-center gap-8">
      {/* Навигационные ссылки */}
    </nav>

    <div className="flex items-center gap-4">
      {/* Социальные иконки, телефон, переключатель языка */}
    </div>
  </div>
</header>
\`\`\`

### Навигационные ссылки

\`\`\`tsx
<Link
  href={`/${currentLocale}`}
  className={cn(
    "text-base font-normal font-barlow uppercase tracking-[0.48px] leading-6 px-2.5 transition-colors duration-200 ease-out",
    isActive("") ? "text-primary" : "hover:text-primary",
  )}
>
  {dictionary.header.home}
</Link>
\`\`\`

### Логика скрытия элементов при скролле

\`\`\`tsx
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
\`\`\`

## Футер

### Структура футера

\`\`\`tsx
<footer className="border-t py-12">
  <div className="container px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <div className="flex flex-col">
          <Image src="/doorshop1-logo.webp" alt="Doorshop1" width={120} height={30} className="h-auto" />
          <span className="text-primary text-xs italic -mt-1">La Référence</span>
        </div>
        <p className="text-muted-foreground">{dictionary.about.description.substring(0, 120)}...</p>
        <div className="flex items-center gap-4 pt-2">
          <SocialIcons />
        </div>
      </div>

      <div className="space-y-4">
        {/* Список продуктов */}
      </div>

      <div className="space-y-4">
        {/* Контактная информация */}
      </div>
    </div>

    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
      {dictionary.footer.copyright}
    </div>
  </div>
</footer>
\`\`\`

## Адаптивность

### Брейкпоинты

\`\`\`typescript
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}
\`\`\`

### Адаптивные стили

\`\`\`css
/* Пример адаптивных стилей */
.hero-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-center;
}

.section {
  @apply py-12 md:py-16 lg:py-24;
}

/* Адаптивная сетка */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3
\`\`\`

## Темная тема

### Настройка провайдера темы

\`\`\`tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
  {/* Содержимое приложения */}
</ThemeProvider>
\`\`\`

### Переключатель темы

\`\`\`tsx
export function ThemeSwitcher({ dictionary }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-muted" : ""}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-muted" : ""}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-muted" : ""}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
\`\`\`

## Логотип

### Размеры логотипа в разных местах

- **Хедер (при скролле вверху)**: 180×40px
- **Хедер (при скролле вниз)**: 140×30px
- **Главная страница (hero секция)**: 160×40px
- **Футер**: 120×30px
- **Мобильное меню**: 150×35px

### Пример использования логотипа

\`\`\`tsx
<Image
  src="/doorshop1-logo.webp"
  alt="Doorshop1"
  width={isAtTop ? 180 : 140}
  height={isAtTop ? 40 : 30}
  className="h-auto transition-all duration-300"
  priority
/>
\`\`\`

### Подпись под логотипом

\`\`\`tsx
<div className="flex flex-col">
  <Image src="/doorshop1-logo.webp" alt="Doorshop1" width={120} height={30} className="h-auto" />
  <span className="text-primary text-xs italic -mt-1">La Référence</span>
</div>
\`\`\`

## Дополнительные компоненты

### Мобильное меню

\`\`\`tsx
<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Menu className="lg:hidden h-6 w-6" />
  </SheetTrigger>
  <SheetContent className="w-full sm:max-w-sm bg-background">
    <SheetHeader>
      <SheetTitle className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image src="/doorshop1-logo.webp" alt="Doorshop1" width={150} height={35} className="h-auto" priority />
        </div>
        <span className="text-primary text-xs italic -mt-1">La Référence</span>
      </SheetTitle>
      <SheetDescription>{dictionary.header.menuDescription}</SheetDescription>
    </SheetHeader>
    <div className="grid gap-6 py-6">
      {/* Навигационные ссылки */}
    </div>
  </SheetContent>
</Sheet>
\`\`\`

### Переключатель языка

\`\`\`tsx
<DropdownMenu open={open} onOpenChange={setOpen}>
  <DropdownMenuTrigger asChild>
    <Button
      variant="ghost"
      size="sm"
      className="uppercase font-semibold text-base text-primary hover:underline transition-all"
    >
      {currentLocale === "en" ? "EN" : "FR"}
      <span className="mx-1">/</span>
      {currentLocale === "en" ? "FR" : "EN"}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem
      onClick={() => switchLanguage("en")}
      className={currentLocale === "en" ? "bg-muted text-primary font-semibold" : ""}
    >
      English
    </DropdownMenuItem>
    <DropdownMenuItem
      onClick={() => switchLanguage("fr")}
      className={currentLocale === "fr" ? "bg-muted text-primary font-semibold" : ""}
    >
      Français
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

### Социальные иконки

\`\`\`tsx
<div className="flex items-center gap-3">
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
  {/* Другие социальные иконки */}
</div>
\`\`\`

## Tailwind конфигурация

\`\`\`typescript
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": theme.layout.containerMaxWidth,
      },
    },
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        barlow: ["var(--font-barlow)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Добавляем наши кастомные цвета
        brand: {
          DEFAULT: theme.colors.primary.DEFAULT,
          light: theme.colors.primary.light,
          dark: theme.colors.primary.dark,
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        fast: theme.animation.duration.fast,
        normal: theme.animation.duration.normal,
        slow: theme.animation.duration.slow,
      },
      transitionTimingFunction: {
        "ease-in-out": theme.animation.easing.easeInOut,
        "ease-out": theme.animation.easing.easeOut,
        "ease-in": theme.animation.easing.easeIn,
      },
      boxShadow: {
        sm: theme.shadows.sm,
        DEFAULT: theme.shadows.DEFAULT,
        md: theme.shadows.md,
        lg: theme.shadows.lg,
        xl: theme.shadows.xl,
        "2xl": theme.shadows["2xl"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
\`\`\`

## Зависимости

\`\`\`json
{
  "dependencies": {
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-toast": "^1.1.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.309.0",
    "next": "14.1.0",
    "next-themes": "^0.2.1",
    "react": "^18",
    "react-dom": "^18",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
