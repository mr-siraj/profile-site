import {} from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex  flex-col relative min-h-screen bg-red-500 ">
        <section className="h-[70px] bg-blue-500 sticky top-0">Layout</section>
        <section className="flex-[1] flex-grow">{children}</section>
      </main>
    </>
  );
}

export default Layout;
