/* eslint-disable react/prop-types */

function ChapArticle({ chapters }) {
  console.log(chapters[0]);
  const SubStr = (content) => {
    const chapter = content.substring(0, 500);
    return <p>{chapter}........</p>;
  };
  return (
    <section
      style={{ scrollbarWidth: "none" }}
      className="overflow-auto   max-h-[670px]  "
    >
      {chapters &&
        chapters.map((chap, i) => {
          return (
            <article
              key={i}
              className=" rounded-lg w-[700px] place-self-center m-3 h-[300px] bg-slate-400"
            >
              <h1>{chap.title}</h1>
              <br />
              {SubStr(chap.content)}
            </article>
          );
        })}
    </section>
  );
}

export default ChapArticle;
