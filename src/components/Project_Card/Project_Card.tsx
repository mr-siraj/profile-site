import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import ImageLoader from "../ImgLoader/ImageLoader";
import "./Project_Card.scss";
import Image from "next/image";
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
  return (
    <>
      <div className="project_card_container">
        <Fragment>
          <Suspense fallback={<ImageLoader />}>
            <Image
              src={projectData.imageContainer.image}
              alt={projectData.project_title}
              height={500}
              width={500}
            />
          </Suspense>
          <div className="link_container">
            <Link
              className={`modal_navigator justify-center flex items-center gap-2`}
              href={`/projects/${projectData.project_title}`}
            >
              <span className="link_text">View Site</span>
              <span className="hidden sm:block">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </Fragment>
      </div>
    </>
  );
}

export default Project_Card;
