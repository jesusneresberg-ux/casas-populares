import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casas Populares - Gestão de Obras",
  description: "Sistema de gestão e acompanhamento de construção de casas populares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
