import {} from "react";
import Header from "@/app/components/Header/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex  flex-col relative min-h-screen bg-red-500 ">
        <section className="h-[70px] sticky top-0">
          <Header />
        </section>
        <section className="flex-[1] flex-grow">{children}</section>
      </main>
    </>
  );
}

export default Layout;
