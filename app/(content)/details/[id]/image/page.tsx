import { DUMMY_NEWS } from "@/app/lib/dummy-news";
import Image from "next/image";
import React from "react";

async function page({ params }) {
  const ids = await params.id;
  const News = DUMMY_NEWS.filter((val) => val.id === ids);
  //   console.log(News);
  return (
    <div className="h-[80%] w-[80%] m-auto border-2 border-black">
      <Image
        priority
        src={`/images/news/${News[0].image}`}
        height={200}
        width={200}
        className="h-[100%] w-[100%]"
        alt={News[0].title}
      />
    </div>
  );
}

export default page;
