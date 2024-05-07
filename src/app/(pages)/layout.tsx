import {} from "react";
import "./layout.scss";
import "../../scss-utils/LinkStyle.scss";
import Header from "@/app/components/Header/Header";
import TopLoadingBar from "@/utils/top-loading-bar/TopLoadingBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex pattern_dark  flex-col relative min-h-screen">
        <TopLoadingBar />
        <section className="sticky top-0">
          <Header />
        </section>
        <section className="flex-[1] flex-grow">{children}</section>
        hello
      </main>
    </>
  );
}

export default Layout;
