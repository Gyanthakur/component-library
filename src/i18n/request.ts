// i18n.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// Define which locales you support
const supportedLocales = ["en", "fr"] as const;
type Locale = (typeof supportedLocales)[number];

// Build a static import map for all translations
const messagesMap: Record<
  Locale,
  Record<string, () => Promise<any>>
> = {
  en: {
    homepage: () => import("../../messages/[en]/homepage.json"),
  },
  fr: {
    homepage: () => import("../../messages/[fr]/homepage.json"),
  }
};

// Now wire it up for next-intl
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("selected-language")?.value || "en";

  const safeLocale: Locale = supportedLocales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  const loaders = messagesMap[safeLocale];

  // Load all message files in parallel
  const entries = await Promise.all(
    Object.entries(loaders).map(async ([key, loader]) => [key, (await loader()).default])
  );

  const messages = Object.fromEntries(entries);

  return {
    locale: safeLocale,
    messages,
  };
});