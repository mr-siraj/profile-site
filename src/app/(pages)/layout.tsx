import {} from "react";
import "./layout.scss";
import "../../scss-utils/LinkStyle.scss";
import Header from "@/app/components/Header/Header";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex   flex-col  min-h-screen">
        <header className="z-[999] sticky top-0 ">
          <Header />
        </header>
        <section className="flex-[1] flex-grow relative z-[998]">
          <PageWrapper>{children}</PageWrapper>
        </section>
        <footer className="absolute md:fixed bottom-2 right-5 text-xs z-[998]">
          &copy; 2024 &nbsp;&nbsp;&nbsp;&nbsp;&trade;Zlaam
        </footer>
      </main>
    </>
  );
}

export default Layout;
