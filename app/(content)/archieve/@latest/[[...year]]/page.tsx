import React, { Suspense } from "react";
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
async function FilteredHeader({
  year,
  month,
}: {
  year: string;
  month: string;
}) {
  let links = getAvailableNewsYears();
  if (
    year &&
    getAvailableNewsMonths(year) &&
    getAvailableNewsYears().includes(year)
  ) {
    console.log(getAvailableNewsYears());
    links = getAvailableNewsMonths(year);
  }
  if (
    month &&
    getAvailableNewsMonths(year) &&
    getAvailableNewsMonths(year).includes(month)
  ) {
    links = [];
  }
  if (
    (year &&
      getAvailableNewsMonths(year) &&
      !getAvailableNewsYears().includes(year)) ||
    (month &&
      getAvailableNewsMonths(year) &&
      !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid path ");
  }
  return (
    <ul className="flex flex-10 gap-10 text-gray-500">
      {links.map((val: any) => (
        <li key={val}>
          <Link href={year ? `/archieve/${year}/${val}` : `/archieve/${val}`}>
            {val}
          </Link>
        </li>
      ))}
    </ul>
  );
}
async function FilteredContent({
  year,
  month,
}: {
  year: string;
  month: string;
}) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>no news selected</p>;

  if (news?.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return <div>{newsContent}</div>;
}

async function page({ params }: any) {
  const year = await params.year;
  console.log(year);
  let links = getAvailableNewsYears();
  console.log(links);
  let news;
  const SelectedYear = year?.[0];
  const SelectedMonth = year?.[1];

  // throw new Error("testing error");
  return (
    <div>
      <Suspense fallback={<h1>...loading header</h1>}>
        <FilteredHeader year={SelectedYear} month={SelectedMonth} />
      </Suspense>
      <Suspense fallback={<h1>...loading content</h1>}>
        <FilteredContent year={SelectedYear} month={SelectedMonth} />
      </Suspense>
    </div>
  );
}

export default page;
