import { getDictionary, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

// Валидация параметров
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  // Получаем параметры асинхронно
  const { lang } = await params;

  // Проверяем, что локаль поддерживается
  if (!locales.includes(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {dictionary.hero.title}
      </h1>
      <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
        {dictionary.hero.subtitle}
      </p>
    </div>
  );
}
