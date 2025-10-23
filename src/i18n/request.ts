// i18n.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// Define which locales you support
const supportedLocales = ["en", "fr","es","hi"] as const;
type Locale = (typeof supportedLocales)[number];

// Build a static import map for all translations
const messagesMap: Record<
  Locale,
  Record<string, () => Promise<any>>
> = {
  en: {
    homepage: () => import("../../messages/[en]/homepage.json"),
    common: () => import("../../messages/[en]/common.json"),
    about: () => import("../../messages/[en]/about.json"),
    contact: () => import("../../messages/[en]/contact.json"),
    comps: () => import("../../messages/[en]/comps.json"),
  },
  fr: {
    homepage: () => import("../../messages/[fr]/homepage.json"),
    common: () => import("../../messages/[fr]/common.json"),
    about: () => import("../../messages/[fr]/about.json"),
    contact: () => import("../../messages/[fr]/contact.json"),
    comps: () => import("../../messages/[fr]/comps.json"),
  },
  es: {
    homepage: () => import("../../messages/[es]/homepage.json"),
    common: () => import("../../messages/[es]/common.json"),
    about: () => import("../../messages/[es]/about.json"),
    contact: () => import("../../messages/[es]/contact.json"),
    comps: () => import("../../messages/[es]/comps.json"),
  },
  hi: {
    homepage: () => import("../../messages/[hi]/homepage.json"),
    common: () => import("../../messages/[hi]/common.json"),
    about: () => import("../../messages/[hi]/about.json"),
    contact: () => import("../../messages/[hi]/contact.json"),
    comps: () => import("../../messages/[hi]/comps.json"),
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