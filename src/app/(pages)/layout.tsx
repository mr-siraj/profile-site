import {} from "react";
import "./layout.scss";
import "../../scss-utils/LinkStyle.scss";
import Header from "@/app/components/Header/Header";
import NextTopLoader from "nextjs-toploader";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex pattern_dark  flex-col  min-h-screen">
        <NextTopLoader
          color="#ffffff"
          initialPosition={0}
          height={3}
          showSpinner={false}
          easing="linear"
          zIndex={1600}
          showAtBottom={false}
        />
        <header className="z-[999] sticky top-0 ">
          <Header />
        </header>
        <section className="flex-[1] flex-grow relative z-[998]">
          <PageWrapper>{children}</PageWrapper>
        </section>
        <footer className="absolute md:fixed bottom-2 right-5 text-xs z-[998]">
          &copy; 2024 &nbsp;&nbsp;&nbsp;&nbsp;Zlaam
        </footer>
      </main>
    </>
  );
}

export default Layout;
