import Link from "next/link";
import {} from "react";

function NotFound() {
  return (
    <>
      <section className="pattern_dark  text-4xl bg-red-500 border border-white gap-10 h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">404 | Not Found</h1>
        <p>
          <Link href="/home" className="text-3xl font-semibold link_dark">
            Go Home
          </Link>
        </p>
      </section>
    </>
  );
}

export default NotFound;
