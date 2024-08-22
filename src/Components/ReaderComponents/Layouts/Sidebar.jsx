/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="w-1/5 min-h-[700px] font-mono text-lg flex justify-center place-items-center bg-slate-600">
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
