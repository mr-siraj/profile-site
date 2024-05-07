import PageWrapper from "@/components/PageWrapper/PageWrapper";
import {} from "react";

function HomePage() {
  return (
    <>
      <PageWrapper className="animate-page min-h-[70vh] flex justify-center flex-col relative top-10">
        <h1 className="text-3xl md:text-5xl md:tracking-wider font-extrabold ">
          I &apos; M &nbsp; MR ZLAAM
        </h1>
        <p className="leading-[2rem] my-4">
          A full-stack developer fueled by a deep passion for crafting
          user-friendly and efficient web applications. With 2 years of
          experience under my belt, I&apos;ve tackled a diverse range of
          projects – from streamlined landing pages that capture attention to
          complex web platforms that power intricate functionalities. Beyond the
          technical expertise, what truly excites me is the user experience.
          While I thrive in the problem-solving world of coding, I also value a
          good mental challenge outside of it. When I&apos;m not coding, I enjoy
          Boxing & Chess.
        </p>
      </PageWrapper>
    </>
  );
}

export default HomePage;
