import ToasterProviders from "@/contexts/ToasterProviders";
import "./globals.css";
import { Poppins } from "next/font/google";
import AuthProviders from "@/contexts/AuthProviders";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone with Next.js and Tailwind CSS & Much More!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProviders>
          <ToasterProviders />
          {children}
        </AuthProviders>
      </body>
    </html>
  );
}
