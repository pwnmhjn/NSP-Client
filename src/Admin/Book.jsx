import { useState } from "react";
import AdminInput from "./adminComponents/AdminInput";
import { useDispatch } from "react-redux";
import { throwFailed, throwSuccess } from "../../features/toast/toastSlice";
import { createBook } from "../../Api/adminApi";

function Book() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    titleExtension: "",
    author: "",
    introduction: "",
    bookImage: null,
    blurb: "",
    genre: "",
    ratings: "",
  });

  const handleBookInput = (event) => {
    const { name, value, files } = event.target;
    setBook((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (event) => {
    const data = new FormData();
    data.append("title", book.title);
    data.append("titleExtension", book.titleExtension);
    data.append("author", book.author);
    data.append("introduction", book.introduction);
    data.append("bookImage", book.bookImage);
    data.append("blurb", book.blurb);
    data.append("genre", book.genre);
    data.append("ratings", book.ratings);

    event.preventDefault();
    console.log(data);
    const response = await createBook(data);
    console.log(response);
    if (response.statusCode === 200) {
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
            <h1 className="mt-[5px]">Create Book</h1>
          </div>
          <AdminInput
            inputName={"title"}
            inputText={"Enter Book Title"}
            type={"text"}
            handleBookInput={handleBookInput}
          />
          <AdminInput
            inputName={"titleExtension"}
            inputText={"Enter Book Title Extension"}
            type={"text"}
            handleBookInput={handleBookInput}
          />
          <AdminInput
            inputName={"author"}
            inputText={"Enter Author Name"}
            type={"text"}
            handleBookInput={handleBookInput}
          />

          <span className="flex flex-col mt-3 ">
            <label
              className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200"
              htmlFor="introduction"
            >
              Enter Book Introduction
            </label>

            <textarea
              className="bg-black border-[3px] h-[150px] w-[350px] outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
              cols="80"
              rows="8"
              name="introduction"
              onChange={handleBookInput}
            ></textarea>
          </span>
          <span className="flex flex-col mt-3 ">
            <label
              className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200"
              htmlFor="blurb"
            >
              Enter Book Blurb
            </label>

            <textarea
              className="bg-black border-[3px] h-[150px] w-[350px] outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
              cols="80"
              rows="8"
              name="blurb"
              onChange={handleBookInput}
            ></textarea>
          </span>

          <AdminInput
            inputName={"bookImage"}
            inputText={" Book Image"}
            type={"file"}
            handleBookInput={handleBookInput}
          />

          <div className="grid grid-cols-2 ">
            <span className="flex flex-col place-items-center mt-3 col-span-1 ">
              <label
                className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200"
                htmlFor="genre"
              >
                Select Genre
              </label>
              <select
                className="bg-black border-[3px] h-[35px] w-24 outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
                id="genre"
                name="genre"
                onChange={handleBookInput}
              >
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
                <option value="Mystery">Mystery</option>
                <option value="Biography">Biography</option>
              </select>
            </span>
            <span className="flex flex-col place-items-center col-span-1 mt-3 ">
              <label
                className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200"
                htmlFor="ratings"
              >
                Rate Book
              </label>
              <select
                className="bg-black border-[3px] h-[35px] w-20 outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
                id="ratings"
                name="ratings"
                onChange={handleBookInput}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </span>
          </div>
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

export default Book;
