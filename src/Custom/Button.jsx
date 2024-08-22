/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Button = ({ linkName, to, boolean = false }) => {
  const [isHover, setIsHover] = useState(false);
  const [hoverClass, setHoverClass] = useState("");
  const activeClass =
    "bg-index-dark shadow-inner font-bold  border-l-index-slate700 border-t-index-slate200 border-b-index-slate700 border-r-index-slate200 text-xl";

  const handleMouseEnter = () => {
    setIsHover(true);
    setHoverClass(
      "font-bold  bg-index-dark shadow-inner  border-l-index-slate700 border-t-index-slate200 border-b-index-slate700 border-r-index-slate200 text-xl "
    );
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    // setHoverClass();
  };

  return (
    <NavLink
      to={to}
      end={boolean}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={({ isActive }) =>
        `border-2 p-1 m-[1px] px-3 h-fit w-[100px] text-center font-mono   ${isHover ? `${hoverClass} ` : ` ${isActive ? `${activeClass}` : " bg-index-lessDark shadow-inner  border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200 text-xl"}`} `
      }
      // className={({ isActive }) =>
      //   `border-2   ${isHover ? `font-bold  bg-index-dark shadow-inner  border-l-index-slate700 border-t-index-slate200 border-b-index-slate700 border-r-index-slate200 text-xl  ` : ` ${isActive ? " bg-index-dark shadow-inner font-bold  border-l-index-slate700 border-t-index-slate200 border-b-index-slate700 border-r-index-slate200 text-xl" : " bg-index-lessDark shadow-inner  border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200 text-xl"}`} p-1 m-[1px] px-3 h-fit w-[100px] text-center font-mono`
      // }
    >
      {linkName}
    </NavLink>
  );
};

export default Button;
