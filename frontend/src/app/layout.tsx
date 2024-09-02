  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import "./globals.scss";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Pizzaria Na Brasa - Sua melhor escolha",
    description: "A melhor pizzaria - Sua melhor escolha",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <html lang="pt-br">
        <body className={inter.className}>
        {/*ola teste*/}
        {children}
        </body>
      </html>
    );

  }
