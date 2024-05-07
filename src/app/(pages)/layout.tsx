import {} from "react";
import "./layout.scss";
import "../../scss-utils/LinkStyle.scss";
import Header from "@/app/components/Header/Header";
import NextTopLoader from "nextjs-toploader";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex pattern_dark  flex-col relative min-h-screen">
        <NextTopLoader
          color="#ffffff"
          initialPosition={1}
          height={3}
          showSpinner={false}
          easing="ease"
          zIndex={1600}
          showAtBottom={false}
        />{" "}
        <section className="sticky top-0">
          <PageWrapper>
            <Header />
          </PageWrapper>
        </section>
        <section className="flex-[1] flex-grow">{children}</section>
        <footer className="absolute bottom-2 right-5 text-xs">
          &copy; 2024 &nbsp;&nbsp;&nbsp;&nbsp;Zlaam
        </footer>
      </main>
    </>
  );
}

export default Layout;
