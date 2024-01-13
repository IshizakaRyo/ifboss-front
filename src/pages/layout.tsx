import { Html, Head, NextScript } from "next/document";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { Noto_Sans_JP } from "next/font/google";

interface Props {
  children: ReactNode;
}

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: Props) {
  return (
    <Html lang="ja">
      <Head />
      <body className={notoSansJP.className}>
        <Header />
        <main>{children}</main>
      </body>
      <NextScript />
    </Html>
  );
}
