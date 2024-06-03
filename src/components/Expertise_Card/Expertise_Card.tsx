"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useEffect, useState } from "react";
import "./Expertise_Card.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageLoader from "../ImgLoader/ImageLoader";

interface ExpertiseData {
  title: string;
  content: string;
  image: string;
}
function Expertise_Card({ data }: { data: ExpertiseData }) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const image = data.image;
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
      <div className="card">
        {isImageLoaded ? (
          <LazyLoadImage
            src={data?.image}
            alt={data?.title}
            height={100}
            width={100}
            effect="blur"
            onBlur={() => {
              <div>
                <ImageLoader />
              </div>;
            }}
          />
        ) : (
          <ImageLoader />
        )}

        <div className="card__content backdrop-blur-sm p-5">
          <h1 className="card__title font-bold text-[1.25rem]">
            {data?.title}
          </h1>
          <p className="card__description  text-sm sm:font-semibold">
            {data?.content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Expertise_Card;
