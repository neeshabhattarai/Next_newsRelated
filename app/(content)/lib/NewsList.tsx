import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsList({ news }: any) {
  return (
    <div className="flex gap-10">
      {news.map((val: any) => (
        <Link href={`/details/${val.id}`}>
          <div key={val.id}>
            <Image
              src={`/images/news/${val.image}`}
              width={200}
              height={200}
              className="h-30 w-30"
              alt={val.title}
            />

            <div>{val.slug}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NewsList;
