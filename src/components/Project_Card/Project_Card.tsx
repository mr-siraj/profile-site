"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Project_Card.scss";
import ImageLoader from "../ImgLoader/ImageLoader";
export interface ProjectDataType {
  id: string;
  imageContainer: {
    image: string;
  };
  project_url: string;
  project_title: string;
  project_desc: string;
}

function Project_Card({ projectData }: { projectData: ProjectDataType }) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const image = projectData.imageContainer.image;
  useEffect(() => {
    const img = new Image();
    if (img)
      img.onload = () => {
        setIsImageLoaded(true);
      };
    img.src = image;
  }, [image]);
  return (
    <>
      {isImageLoaded ? (
        <div className="project_card_container ">
          <Fragment>
            <LazyLoadImage
              src={projectData.imageContainer.image}
              alt={projectData.project_title}
              effect="blur"
            />

            <div className="link_container">
              <Link
                className={`modal_navigator justify-center flex items-center gap-2`}
                href={`/projects/${projectData.project_title}`}
              >
                <span className="link_text">View Site</span>
                <span className="hidden sm:block">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </Fragment>
        </div>
      ) : (
        <div className="h-[350px]  project_card_container  flex justify-center items-center">
          <ImageLoader />
        </div>
      )}
    </>
  );
}

export default Project_Card;
