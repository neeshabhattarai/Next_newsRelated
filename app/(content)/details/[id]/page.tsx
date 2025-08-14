import React from "react";

import Image from "next/image";
import Link from "next/link";
import { getAllNews, getById } from "../../lib/news";
type valOb = Record<
  "image" | "text" | "content" | "title" | "date" | "slug" | "id",
  string
>;

async function Page({ params }: { params: { id: string } }) {
  const ids = await params.id;
  const News = await getById(ids);
  console.log(News);

  return (
    <div>
      <div key={News.id}>
        <Link href={`/details/${ids}/image`}>
          <Image
            src={`/images/news/${News.image}`}
            width={200}
            height={200}
            className="h-70 w-60"
            alt={News.title}
          />
        </Link>
        <div>{News.slug}</div>

        <div>{News.title}</div>
        <div>Created at:{News.date}</div>
        <p>{News.content}</p>
      </div>
    </div>
  );
}

export default Page;
