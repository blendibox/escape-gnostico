import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google"
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-cinzel",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

export const metadata = {
  title: "Escape Gnóstico",
  description: "O Conhecimento Proibido das Sete Esferas"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
	<head>
	  <link rel="preconnect" href="https://fonts.googleapis.com" />
	</head>
      <body
        className={`${cinzel.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
