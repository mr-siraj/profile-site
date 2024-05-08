import Link from "next/link";

function HomePage() {
  return (
    <>
      <main className="animate-page overflow-x-hidden  min-h-[70vh] md:min-h-[60vh] flex justify-center flex-col py-12   ">
        <h1 className="text-3xl md:text-5xl md:tracking-wider font-extrabold ">
          I &apos; M &nbsp; MR ZLAAM
        </h1>
        <p className="md:leading-[2.5rem] leading-[2rem] md:my-4 my-2 text-balance text-lg text-white/80">
          A full-stack developer fueled by a deep passion for crafting
          user-friendly and efficient web applications. With 2 years of
          <Link
            href="/expertise"
            className="hover:text-blue-500 duration-300 transition-all text-[1.25rem] font-semibold text-white"
          >
            &nbsp; experience&nbsp;
          </Link>
          under my belt, I&apos;ve tackled a diverse range of
          <Link
            href="/projects"
            className="hover:text-blue-500 duration-300 transition-all text-[1.25rem] font-semibold text-white"
          >
            &nbsp; projects
          </Link>
          &nbsp; – from streamlined landing pages that capture attention to
          complex web platforms that power intricate functionalities. Beyond the
          technical expertise, what truly excites me is the user experience.
          While I thrive in the problem-solving world of coding, I also value a
          good mental challenge outside of it. When I&apos;m not coding, I enjoy
          Boxing & Chess.
        </p>
      </main>
    </>
  );
}

export default HomePage;
