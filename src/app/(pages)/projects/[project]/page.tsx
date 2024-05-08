"use client";
import {} from "react";
interface ParamType {
  project: string;
}
function Project({ params }: { params: ParamType }) {
  return (
    <>
      <section>{params.project}</section>
    </>
  );
}

export default Project;
