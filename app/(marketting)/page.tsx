import logo from "@/public/logo.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      id="home"
      className="w-[80%] m-auto flex flex-col mt-10 tracking-[1px] gap-2 justify-center items-center"
    >
      <img src={logo.src} alt="A newspaper" className="h-50 w-50" />
      <h1>A News Site For The Next Generation</h1>
      <p>
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p>
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <p>
        <Link href="/archieve" className="bg-amber-600 px-3 py-2 rounded">
          Read the latest news
        </Link>
      </p>
    </div>
  );
}
