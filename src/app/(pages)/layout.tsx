import {} from "react";
import "./layout.scss";
import "../../scss-utils/LinkStyle.scss";
import Header from "@/app/components/Header/Header";
import NextTopLoader from "nextjs-toploader";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex pattern_dark  flex-col relative min-h-screen">
        <NextTopLoader
          color="#2299DD"
          initialPosition={1}
          crawlSpeed={200}
          height={3}
          crawl={false}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />{" "}
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
