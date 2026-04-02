import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";

export const metadata: Metadata = {
  title: "Nante | Portfolio",
  description: "Portfolio de Nante - Développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
