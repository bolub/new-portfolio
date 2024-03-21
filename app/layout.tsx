import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";
import Toolbar from "./components/toolbar/Toolbar";

export const metadata: Metadata = {
  title: "Boluwatife Abiola",
  description:
    "Welcome to my space. Find out all about me here, might get a little weird though",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png",
        height: 552,
        width: 318,
        alt: "Cover Image",
      },
    ],
  },
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

          <Toolbar />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
