import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/src/lib/registry";

export const metadata: Metadata = {
  title: "Da'wa Brasil",
  description: "Plataforma de divulgação do Islam em português.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
