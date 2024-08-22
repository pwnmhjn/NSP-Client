import { useState } from "react";
import AdminInput from "./adminComponents/AdminInput";
import { useDispatch } from "react-redux";
import { throwFailed, throwSuccess } from "../../features/toast/toastSlice";
import { createChapter } from "../../Api/adminApi";
function Chapter() {
  const dispatch = useDispatch();
  const [chapter, setChapter] = useState({
    title: "",
    ratings: "",
    bookName: "",
    chapterNumber: "",
    content: "",
  });

  const handleChapterInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setChapter((prev) => {
      prev[fieldName] = fieldValue;
      return { ...prev };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createChapter(chapter);
    if (response.staCode === 200) {
      dispatch(throwSuccess(true, "Success", response.message));
    } else {
      dispatch(throwFailed(true, "Failed", response.message));
    }
  };

  return (
    <>
      <div className=" w-full flex  items-center justify-center  bg-index-lessLight">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mx-auto my-10 py-10 place-content-center bg-index-light  w-[50%] gap-3  border-4  border-b-index-slate700 border-r-index-slate200 border-l-index-slate700 border-t-index-slate200"
        >
          <div className="h-10 w-[200px] font-mono text-l border-4 rounded-xl font-bold border-t-index-slate700 text-center border-l-index-slate700 border-b-index-slate200 border-r-index-slate200 ">
            <h1 className="mt-[5px]">Create Chapter</h1>
          </div>
          <AdminInput
            inputName={"title"}
            inputText={"Chapter Name"}
            type={"text"}
            handleBookInput={handleChapterInput}
          />
          <AdminInput
            inputName={"bookName"}
            inputText={"Enter Book Name"}
            type={"text"}
            handleBookInput={handleChapterInput}
          />
          <AdminInput
            inputName={"ratings"}
            inputText={"Rate Chapter"}
            type={"number"}
            handleBookInput={handleChapterInput}
          />
          <AdminInput
            inputName={"chapterNumber"}
            inputText={"Chapter No."}
            type={"number"}
            handleBookInput={handleChapterInput}
          />

          <span className="flex flex-col mt-3 ">
            <label
              className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200"
              htmlFor="content"
            >
              Summary
            </label>

            <textarea
              className="bg-black border-[3px] h-[150px] w-[350px] outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
              cols="80"
              rows="8"
              name="content"
              onChange={handleChapterInput}
            ></textarea>
          </span>

          <button
            className="border-2 p-2 px-3 hover:font-bold font-mono h-fit text-2xl w-[150px] my-3 border-b-index-slate700  hover:bg-index-lessDark bg-index-dark    border-r-index-slate700 shadow-2xl  hover:shadow-inner "
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Chapter;
