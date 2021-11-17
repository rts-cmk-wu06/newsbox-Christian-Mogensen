import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3Y6iE37kXOnVAcVMU57a4fyOwQWmZCmJ"
  );
  const data = await res.json();
  return {
    props: { articles: data },
  };
};

export default function Home({ articles }) {
  const emptyArr = [];
  emptyArr.push(articles);
  console.log(emptyArr[0].results.section);
  emptyArr[0].results.forEach(section => console.log(section.section))
  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;
  // console.log(articles);
  return (
    <>
      {/* // Header -> need to look into how to change props dynamically */}
      <header className="sticky top-0 header h-[60px] flex items-center shadow-sm bg-white  border-b w-full">
        <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
          <Link href="/archive" exact><a>
            <div className="w-full h-full flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div></a>
          </Link>
          <h1 className="Section__heading justify-self-center">Newsbox</h1>
          <Link href="/setting" exact><a>
            <div className="w-full h-full flex justify-end items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div></a>
          </Link>
        </nav>
      </header>

      {/* // content loaded from fetch */}
      <div className="flex  justify-center flex-col">
        {emptyArr[0].results.map((article) => (
          <a
            key={article.title + article.url}
            target="_blank"
            href={article.url}
          >
            {" "}
            <div className="flex items-center border-b border-[color:var(--btn-clr-border)]">
              <div className="cover-img">
                <img
                  className="article-img"
                  src={article.multimedia[0].url}
                  alt={article.title + " image"}
                />
              </div>
              <div>
                <h2 className="Card__title">
                  {truncate(article.title, 20, "...")}
                </h2>
                <p className="Message__time_stamp">
                  {truncate(article.abstract, 40, "...")}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
