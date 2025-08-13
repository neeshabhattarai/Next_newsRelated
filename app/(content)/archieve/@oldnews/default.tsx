import { getAllNews } from "@/app/(content)/lib/news";
import NewsList from "@/app/(content)/lib/NewsList";
import React from "react";

function page() {
  const news = getAllNews();
  return <NewsList news={news} />;
}

export default page;
