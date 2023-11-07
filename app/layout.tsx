import "../styles/globals.css";
import { Vazirmatn } from "next/font/google";
import { Metadata } from "next";
const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "تماشاخانه",
  description: "ساخته شده توسط نیما",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={vazir.className} id="app">
        {children}
      </body>
    </html>
  );
}
