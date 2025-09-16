import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Poppins - use it later
import "./globals.css";
import { ContactProvider } from "./components/contact-context";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Anthony Milad - Automation ",
  description: "Automations that remove repetitive steps from your work.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
