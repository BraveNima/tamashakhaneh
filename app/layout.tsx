/* The code you provided is a TypeScript React component that serves as the root layout for your
application. */
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import { Vazirmatn } from "next/font/google";
import { Metadata } from "next";
const vazir = Vazirmatn({ subsets: ["latin"] });

/* The code `export const metadata: Metadata = { ... }` is defining a constant variable named
`metadata` of type `Metadata`. The `Metadata` type is likely a custom type or interface defined
elsewhere in the codebase. */
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
    <ClerkProvider>
      <html lang="en" dir="rtl">
        <body className={vazir.className} id="app">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
