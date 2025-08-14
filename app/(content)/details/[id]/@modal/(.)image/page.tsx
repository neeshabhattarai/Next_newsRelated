import Image from "next/image";

import React from "react";
import ClientRouting from "./ClientRouting";
import { getAllNews, getById } from "@/app/(content)/lib/news";

async function Page({ params }: { params: { id: string } }) {
  const ids = params.id;
  const News = await getById(ids);
  console.log(News);
  return (
    <div className="w-screen m-auto border-3 border-red-300 backdrop-blur-lg bg-gray-200 h-lvh ">
      <ClientRouting />
      <Image
        priority
        src={`/images/news/${News.image}`}
        height={200}
        width={200}
        className="h-[60%] w-[60%] m-auto"
        alt={News.title}
      />
    </div>
  );
}

export default Page;
