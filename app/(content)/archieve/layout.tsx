import Link from "next/link";
import React from "react";

function page({ latest, oldnews }: any) {
  return (
    <div className="flex flex-col gap-1">
      Archieve page
      <div className="pb-5 border-b-2 border-black  ">{latest}</div>
      <div className="border-t-2 border-black pt-3">{oldnews}</div>
    </div>
  );
}

export default page;
