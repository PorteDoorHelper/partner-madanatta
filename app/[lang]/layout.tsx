import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Store } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";

// Используем шрифт из нашей темы
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Валидация параметров
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  // Проверяем, что локаль поддерживается
  const { lang } = await params;

  if (!locales.includes(lang)) {
    return {
      title: "DoorPartner - Premium Interior Door Dealership in Canada",
      description:
        "Become a dealer of premium interior doors in Canada with a ready-to-use branded online store",
    };
  }

  const dictionary = await getDictionary(lang);

  return {
    title: "DoorPartner - " + dictionary.hero.title,
    description: dictionary.hero.subtitle,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  // Получаем параметры асинхронно
  const { lang } = await params;

  // Проверяем, что локаль поддерживается
  if (!locales.includes(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header currentLocale={lang} dictionary={dictionary} />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-10">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                  <div className="flex items-center gap-2">
                    <Store className="h-6 w-6" />
                    <span className="text-lg font-bold">
                      {dictionary.header.title}
                    </span>
                  </div>
                  <p className="text-center text-sm text-muted-foreground md:text-left">
                    {dictionary.footer.copyright}
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
