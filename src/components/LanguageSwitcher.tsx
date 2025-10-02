import { useRouter } from "next/router";

const locales = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = router.locale ?? "en";

  function changeLocale(nextLocale: string) {
    if (nextLocale === currentLocale) return;
    void router.push(router.asPath, undefined, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => changeLocale(loc.code)}
          className={
            "rounded px-2 py-1 text-sm transition " +
            (currentLocale === loc.code
              ? "bg-white/10 text-foreground"
              : "text-muted-foreground hover:bg-white/5")
          }
          aria-pressed={currentLocale === loc.code}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}


