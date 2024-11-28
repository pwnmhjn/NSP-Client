import { useParams } from "react-router-dom";
import { selectChapterById } from "../features/chapters/chapterSlice";
import { useSelector } from "react-redux";

function Chapter() {
  const { id } = useParams();
  const chapter = useSelector((state) => selectChapterById(state, id));
  return (
    <>
      <div
        style={{ scrollbarWidth: "none" }}
        className="  overflow-auto  h-[650px] p-4 mt-6  md:flex flex-col   hidden   bg-slate-400  lg:w-[600px]   border-[6px]  border-t-index-slate700 border-l-index-slate700 border-r-index-slate200 border-b-index-slate200 place-self-center "
      >
        {chapter.title}
        <br />
        {chapter.content}
      </div>
    </>
  );
}

export default Chapter;
