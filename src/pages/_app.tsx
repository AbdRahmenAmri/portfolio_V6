import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

type AppContentProps = {
  Component: React.ComponentType<unknown>;
  pageProps: Record<string, unknown>;
};

const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const { locale } = useRouter();
  const language = locale ?? "en";
  const direction = language === "ar" ? "rtl" : "ltr";
  return (
    <div lang={language} dir={direction} className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

const MyApp: AppType = (props) => {
  return <AppContent {...props} />;
};

export default appWithTranslation(MyApp);
