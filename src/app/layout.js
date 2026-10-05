import { Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { defaultMetadata } from "./metadata";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/umag.png" />
      </head>
      <body className={`${archivo.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
