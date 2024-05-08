"use client";
import projectData from "@/app/(pages)/projects/project.json";
import ImageLoader from "@/components/ImgLoader/ImageLoader";
import Image from "next/image";
import { Suspense } from "react";

interface ParamType {
  project: string;
}

function Project({ params }: { params: ParamType }) {
  const data = projectData.find(
    (data) => data.project_title === params.project
  );

  // Check if data and data.imageContainer.image are defined before accessing their properties
  const src = data && data.imageContainer && data.imageContainer.image;

  return (
    <>
      <section className="animate-page">
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
      </section>
    </>
  );
}

export default Project;
