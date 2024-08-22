import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import DashOption from "../Tinycomp/DashOption";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/user/userSlice";

function Header() {
  const [option, setOption] = useState(false);
  // const navigate = useNavigate();
  const payload = useSelector(selectUser);
  const user = payload.user;

  return (
    <>
      <div className="w-full z-10 fixed top-0 flex rounded-br-lg   bg-index-slate700 p-1 h-24">
        <div className="icon min-w-72   m-1">
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
              className="  w-[600px] outline-none  hidden lg:block bg-slate-600 place-self-center  rounded-xl h-12 p-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="h-12 place-self-center min-w-48 rounded-md     bg-slate-600">
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
        <div className="sandwich min-w-20 flex  flex-shrink-0   place-content-center  m-1">
          <button
            onClick={() => setOption(!option)}
            className="place-content-center justify-center"
          >
            <FaBars className=" text-3xl text-index-slate200 hover:text-white  hover:text-4xl  transition-transform duration-300 ease-in-out transform hover:scale-125 " />
          </button>
          {option ? <DashOption setOption={setOption} option={option} /> : null}
        </div>
      </div>
    </>
  );
}

export default Header;
