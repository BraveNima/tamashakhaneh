import { Footer, Header } from "@/components/layout";

export default function generalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header leftNav={true} />
      <main className="h-fit min-h-screen max-w-[100vw] opacity-100">
        {children}
      </main>
      <Footer />
    </>
  );
}
