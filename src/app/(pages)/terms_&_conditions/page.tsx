import Link from "next/link";
import {} from "react";

function Terms_And_Conditions() {
  return (
    <>
      <section className=" h-[90dvh] animate-page flex justify-center items-center flex-col gap-10">
        <h1 className="md:text-5xl font-bold italic text-3xl text-center">
          We&apos;ll Update This Page Soon
        </h1>
        <p>
          <Link href={"/contact"} className="link_dark text-2xl font-semibold">
            Go Back
          </Link>
        </p>
      </section>
    </>
  );
}

export default Terms_And_Conditions;
