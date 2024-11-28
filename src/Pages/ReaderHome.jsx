import { ChapArticle } from "../Components/ReaderComponents";
import { selectChapters } from "../features/chapters/chapterSlice";
import { useSelector } from "react-redux";

function ReaderHome() {
  const chapters = useSelector(selectChapters);
  return (
    <div className="mx-auto my-2 ">
      <ChapArticle chapters={chapters} />
    </div>
  );
}

export default ReaderHome;
