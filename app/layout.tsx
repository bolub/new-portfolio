import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boluwatife Abiola",
  description:
    "Welcome to my space. Find out all about me here, might get a little weird though",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
