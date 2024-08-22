import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { Link, Outlet } from "react-router-dom";
import { format } from "date-fns";

function Profile() {
  const payload = useSelector(selectUser);
  const { user, accessToken } = payload;

  const newDate = format(user.createdAt, "dd-MM-yyyy");

  return (
    <>
      <div className="flex  flex-col font-mono mx-auto w-2/3 h-fit mt-10 border-2 rounded-md  bg-slate-400">
        <div
          className="bg-cover group relative"
          style={{ backgroundImage: `url(${user.coverImage})` }}
        >
          <Link
            to="cover-edit"
            className="bg-transparent absolute opacity-0 group-hover:opacity-100 border-2 h-fit w-fit p-2 m-3 "
          >
            Edit Cover
          </Link>
          <div
            style={{ backgroundImage: `url(${user.avatar})` }}
            className="mx-auto   text-center bg-cover h-40 justify-items-center relative  overflow-hidden  w-40 mt-5 rounded-full "
          >
            <div className="absolute bottom-0">
              <Link to="avatar-edit">
                <button className="h-6 w-40 bg-slate-500 opacity-0 hover:opacity-100 text-xs font-bold ">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <h1 className="font-bold  underline text-2xl text-black text-center p-1">
            @{user.username}
          </h1>
          <div className="text-teal-800 flex justify-between  ml-3 mb-3">
            <span>
              <h1 className=" font-bold">
                Since:- <span className="text-black"> {newDate}</span>{" "}
              </h1>
            </span>
            <span>
              <Link
                to="edit"
                className=" mr-2 w-fit h-fit border-2  bg-teal-900 p-2 text-black "
              >
                Edit Profile
              </Link>
            </span>
          </div>
        </div>
        <div className="text-teal-800  p-5  bg-slate-400 font-bold">
          <span className="mt-3 ">
            <h1>
              Full Name:- <span className="text-black ">{user.fullname}</span>
            </h1>
          </span>
          <span className="mt-3 ">
            <h1>
              DOB:- <span className=" text-black ">{user.DOB}</span>
            </h1>
          </span>
          <span className="mt-3">
            <h1>
              Email:- <span className="text-black ">{user.email}</span>
            </h1>
          </span>
        </div>
        <Outlet context={{ user, accessToken }} />
      </div>
    </>
  );
}

export default Profile;
