import {} from "react";
import "./Expertise_Card.scss";
import Image from "next/image";
interface ExpertiseData {
  title: string;
  content: string;
  image: string;
}
function Expertise_Card({ data }: { data: ExpertiseData }) {
  return (
    <>
      <div className="card">
        <Image src={data.image} alt={data.title} height={100} width={100} />
        <div className="card__content backdrop-blur-sm p-5">
          <h1 className="card__title font-bold text-[1.25rem]">{data.title}</h1>
          <p className="card__description  text-sm sm:font-semibold">
            {data.content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Expertise_Card;