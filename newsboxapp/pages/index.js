import Head from "next/head";
import Link from "next/link";

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3Y6iE37kXOnVAcVMU57a4fyOwQWmZCmJ"
//   );
//   const data = await res.json();

//   return {
//     props: { articles: data },
//   };
// };

export default function Home({ articles }) {
  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;
  console.log(articles);
  return (
    <div className="flex  justify-center flex-col">
      {articles.results.map((article) => (
        <a key={article.title + article.url} target="_blank" href={article.url}>
          {" "}
          
            <div
              className="flex items-center border-b border-[color:var(--btn-clr-border)]"
              
            >
              <div className="cover-img">
                <img
                  className="article-img"
                  src={article.multimedia[0].url}
                  alt={article.title+' image'}
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
  );
}
