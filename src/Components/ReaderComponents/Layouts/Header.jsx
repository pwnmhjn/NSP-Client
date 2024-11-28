import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import DashOption from "../Tinycomp/DashOption";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProfile } from "../../../features/user/userSlice.js";

function Header() {
  const [option, setOption] = useState(false);
  const user = useSelector(selectProfile);

  return (
    <>
      <div className="w-full z-10 fixed top-0 flex rounded-br-lg  bg-index-slate700 p-1 h-24">
        <div className="icon min-w-40 m-1">
          <Link to="/reader">
            <img
              className="h-28 ml-2   hover:h-32 transition-transform duration-300 ease-in-out transform hover:scale-125 "
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="search w-full  m-1  ">
          <div className="flex mr-14 items-center  justify-center h-full">
            <input
              className="  xl:w-[600px] lg:w-[400px] md:w-[300px] sm:block hidden  outline-none bg-slate-600 place-self-center  rounded-xl h-12 p-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="h-14 lg:block hidden place-self-center min-w-48  bg-slate-600  w-[300px]   font-mono text-lg md:flex justify-center place-items-center px-2 pt-1 border-2 font-bold text-center border-b-index-slate700   border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 ">
          <Link
            to="profile"
            className="flex px-2 place-items-center font-mono font-bold p-1  text-center"
          >
            <img
              src={user.avatar}
              className="h-10 w-10 rounded-full mr-1 object-cover"
              alt=""
            />
            <h1>{user.fullname}</h1>
          </Link>
        </div>
        <div className="sandwich min-w-20 flex  place-content-center  m-1">
          <button
            onClick={() => setOption(!option)}
            className="place-content-center justify-center"
          >
            <FaBars className=" text-3xl text-index-slate200 hover:text-white  hover:text-4xl  transition-transform duration-300 ease-in-out transform hover:scale-125 " />
          </button>
          <div>
            {option ? (
              <DashOption setOption={setOption} option={option} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
