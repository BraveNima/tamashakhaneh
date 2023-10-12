import "../styles/globals.css";
import { Vazirmatn } from "next/font/google";
const vazir = Vazirmatn({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={vazir.className}>
      <body id="app">{children}</body>
    </html>
  );
}
