"use client";
import projectData from "@/app/(pages)/projects/project.json";
import ImageLoader from "@/components/ImgLoader/ImageLoader";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface ParamType {
  project: string;
}

function Project({ params }: { params: ParamType }) {
  const data = projectData.find(
    (data) => data.project_title === params.project
  );

  const src = data && data.imageContainer && data.imageContainer.image;

  return (
    <>
      <Link
        title="Go Back"
        href="/projects"
        className="fixed z-10 left-10 top-10 pointer h-10 w-10 duration-300 transition-all hover:bg-white/20 flex justify-center items-center rounded-full "
      >
        <ArrowLeft />
      </Link>
      <section className="animate-page relative z-5">
        <div className="my-4">
          {src && (
            <Suspense fallback={<ImageLoader />}>
              <Image
                src={src as string}
                alt={data?.project_title}
                width={1000}
                height={1000}
                className="object-cover rounded-md shadow-md"
              />
            </Suspense>
          )}
        </div>
        <h1 className="md:text-5xl text-3xl text-center font-bold">
          {data?.project_title}
        </h1>
        <p className="my-4 md:text-2xl text-lg text-balance  sm:text-justify font-normal tracking-wider">
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
      </section>
    </>
  );
}

export default Project;
