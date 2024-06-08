import projectData from "@/app/(pages)/projects/project.json";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ImageRenderer from "./components/ImageRenderer";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

interface ParamType {
  project: string;
}
export async function generateStaticParams() {
  return projectData.map(({ id }) => id).slice(0, 5);
}
function Project({ params }: { params: ParamType }) {
  const data = projectData.find(
    (data) => data.project_title === params.project
  );

  const image = data && data.imageContainer && data.imageContainer.image;

  return (
    <>
      <Link
        title="Go Back"
        href="/projects"
        className="fixed z-10 left-10 top-10 pointer h-10 w-10 duration-300 transition-all hover:bg-white/20 flex justify-center items-center rounded-full "
      >
        <ArrowLeft />
      </Link>
      <div className="animate-page relative z-5">
        <div className="my-4">
          {image && <ImageRenderer image={image} title={data?.project_title} />}
        </div>
        <h1 className="md:text-5xl text-3xl text-center font-bold  w-full">
          {data?.project_title}
        </h1>
        <p className="my-4 md:text-2xl text-lg  text-left   sm:text-left font-normal tracking-wider">
          {data?.project_desc}
        </p>
        <p className="text-2xl text-center my-10 ">
          {data && (
            <Link
              className="link_dark"
              target="_blank"
              href={data?.project_url}
            >
              Go to the website
            </Link>
          )}
        </p>
      </div>
    </>
  );
}

export default Project;
