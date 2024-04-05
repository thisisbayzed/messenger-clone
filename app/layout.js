import ToasterProviders from "@/contexts/ToasterProviders";
import "./globals.css";
import AuthProviders from "@/contexts/AuthProviders";

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone with Next.js and Tailwind CSS & Much More!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProviders>
          <ToasterProviders />
          {children}
        </AuthProviders>
      </body>
    </html>
  );
}
