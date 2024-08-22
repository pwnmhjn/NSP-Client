import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import useLogout from "../../../hooks/useLogout";
import { useDispatch } from "react-redux";
import { throwSuccess } from "../../../features/toast/toastSlice";

const DashOption = ({ setOption, option }) => {
  const logout = useLogout();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const res = await logout();
    const message = res.data.message;
    dispatch(throwSuccess(true, "Success", message));
    setOption((prev) => !prev);
    navigate("/");
  };

  return (
    <>
      <div className=" flex flex-col  justify-around h-60 w-40 rounded-l-xl p-3 rounded-br-lg border-2 border-slate-700 absolute top-14 right-12 bg-slate-500">
        <span className=" h-5 w-full">
          <Link
            to="profile"
            onClick={() => setOption(!option)}
            className=" text-lg font-mono hover:underline hover:font-bold"
          >
            <IoPersonCircleSharp className="text-3xl ml-1 inline-block" />
            Profile
          </Link>
        </span>
        <span className=" h-5 w-full">
          <Link
            to="profile"
            onClick={handleLogout}
            className=" text-lg font-mono hover:underline hover:font-bold"
          >
            <IoLogOut className="text-3xl ml-1 inline-block" />
            Logout
          </Link>
        </span>
      </div>
    </>
  );
};

export default DashOption;
