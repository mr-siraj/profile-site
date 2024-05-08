import Link from "next/link";
import {} from "react";

function Terms_And_Conditions() {
  return (
    <>
      <section className=" h-[70dvh] flex justify-center items-center flex-col gap-10">
        <h1 className="text-5xl font-bold italic">
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
