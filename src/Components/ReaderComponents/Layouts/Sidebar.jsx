/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className=" min-w-[150px]  hidden w-[300px] min-h-[670px] my-4 ml-2  font-mono text-lg md:flex justify-center place-items-center bg-slate-600 px-2  border-4 font-bold text-center border-b-index-slate700   border-r-index-slate700 border-t-index-slate200 border-l-index-slate200">
        <div>
          <Link
            className="font-bold hover:underline border-2 w-fit h-fit p-2"
            to="authors"
          >
            Authors
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
