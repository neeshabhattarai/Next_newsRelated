import React from "react";
import { DUMMY_NEWS } from "@/app/(content)/lib/dummy-news";
import Image from "next/image";
import Link from "next/link";

function Page({ params }: any) {
  const id = params.id;
  const News = DUMMY_NEWS.filter((val) => val.id === id);

  return (
    <div>
      {News.map((val) => (
        <div key={val.id}>
          <Link href={`/details/${id}/image`}>
            <Image
              src={`/images/news/${val.image}`}
              width={200}
              height={200}
              className="h-70 w-60"
              alt={val.title}
            />
          </Link>
          <div>{val.slug}</div>

          <div>{val.title}</div>
          <div>Created at:{val.date}</div>
          <p>{val.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
