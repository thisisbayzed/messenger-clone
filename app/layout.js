import "./globals.css";

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone with Next.js and Tailwind CSS & Much More!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
