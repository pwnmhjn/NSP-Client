/* eslint-disable react/prop-types */

function ChapArticle({ chapters }) {
  return (
    <>
      <article>
        {chapters &&
          chapters.map((chap, i) => {
            return (
              <div key={i}>
                <h1>{chap.title}</h1>
              </div>
            );
          })}
      </article>
    </>
  );
}

export default ChapArticle;
