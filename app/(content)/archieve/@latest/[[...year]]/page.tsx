import React from "react";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getAllNews,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/(content)/lib/news";
import Link from "next/link";
import Image from "next/image";
import NewsList from "@/app/(content)/lib/NewsList";

async function page({ params }: any) {
  const year = await params.year;
  console.log(year);
  let links = getAvailableNewsYears();
  let news;
  const SelectedYear = year?.[0];
  const SelectedMonth = year?.[1];

  let newsContent = <p>no news selected</p>;
  if (
    SelectedYear &&
    getAvailableNewsMonths(SelectedYear) &&
    getAvailableNewsYears().includes(Number.parseInt(SelectedYear))
  ) {
    console.log(getAvailableNewsYears());
    links = getAvailableNewsMonths(year);
    news = getNewsForYear(year);
  }
  if (
    SelectedMonth &&
    getAvailableNewsMonths(SelectedYear) &&
    getAvailableNewsMonths(SelectedYear).includes(
      Number.parseInt(SelectedMonth)
    )
  ) {
    links = [];
    news = getNewsForYearAndMonth(year[0], year[1]);
  }
  if (news?.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  if (
    (SelectedYear &&
      getAvailableNewsMonths(SelectedYear) &&
      !getAvailableNewsYears().includes(Number.parseInt(SelectedYear))) ||
    (SelectedMonth &&
      getAvailableNewsMonths(SelectedYear) &&
      !getAvailableNewsMonths(SelectedYear).includes(
        Number.parseInt(SelectedMonth)
      ))
  ) {
    throw new Error("Invalid path ");
  }

  // throw new Error("testing error");
  return (
    <div>
      <ul className="flex flex-10 gap-10 text-gray-500">
        {links.map((val) => (
          <li key={val}>
            <Link href={year ? `/archieve/${year}/${val}` : `/archieve/${val}`}>
              {val}
            </Link>
          </li>
        ))}
      </ul>
      {newsContent}
    </div>
  );
}

export default page;
