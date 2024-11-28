/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ChapArticle({ chapters }) {
  // const SubStr = (content) => {
  //   const chapter = content.substring(0, 500);
  //   return <>{chapter}........</>;
  // };
  return (
    <section
      style={{ scrollbarWidth: "none" }}
      className="overflow-auto   max-h-[670px]  "
    >
      {chapters &&
        chapters.map((chap, i) => {
          return (
            <Link key={i} to={`chapter/${chap._id}`}>
              <article className="  w-[700px] p-4  md:flex flex-col   hidden  lg:h-[400px] md:h-[200px]  bg-slate-400  lg:w-[600px]   border-[6px]  border-t-index-slate700 border-l-index-slate700 border-r-index-slate200 border-b-index-slate200 place-self-center m-3 h-[300px] ">
                <div className="place-self-center">
                  <div className="h-8 w-fit  bg-blue-400 font-mono text-lg px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 ">
                    <h1 className="">{chap.title}</h1>
                  </div>
                </div>
                <br />
                <div className="">
                  <div className="h-8 w-fit font-mono text-lg px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 ">
                    Summary :-
                  </div>{" "}
                  <p className="font-semibold mt-2">{`${chap.content.substring(0, 500)}`}</p>
                </div>
                <br />
                <div>
                  <div className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 ">
                    <p className="font-bold">Ratings {chap.ratings}</p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
    </section>
  );
}

export default ChapArticle;
