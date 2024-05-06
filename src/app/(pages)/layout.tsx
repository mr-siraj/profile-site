import {} from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>Layout</section>
      {children}
    </>
  );
}

export default Layout;
