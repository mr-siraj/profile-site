import {} from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-red-400 min-h-screen overflow-x-hidden overflow-y-auto max-w-full">
        {children}
      </main>
    </>
  );
}

export default Container;
