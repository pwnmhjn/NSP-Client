/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className=" min-w-[300px] min-h-[670px] my-4 ml-2 rounded-lg font-mono text-lg flex justify-center place-items-center bg-slate-600">
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
