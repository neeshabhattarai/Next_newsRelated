"use client";
import { DUMMY_NEWS } from "@/app/(content)/lib/dummy-news";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Page({ params }: any) {
  const route = useRouter();
  const ids = params.id;
  const News = DUMMY_NEWS.filter((val) => val.id === ids);
  //   console.log(News);
  return (
    <div
      className="w-screen m-auto border-3 border-red-300 backdrop-blur-lg bg-gray-200 h-lvh "
      onClick={route.back}
    >
      <div className="text-xl text-red-400">Intercepted</div>
      <Image
        priority
        src={`/images/news/${News[0].image}`}
        height={200}
        width={200}
        className="h-[60%] w-[60%] m-auto"
        alt={News[0].title}
      />
    </div>
  );
}

export default Page;
