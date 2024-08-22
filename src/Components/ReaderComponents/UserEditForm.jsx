import React, { useState } from "react";
import { useNavigate, Link, useOutletContext } from "react-router-dom";
import { axiosPrivate } from "../../../Api/Api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/userSlice";
import { throwFailed, throwSuccess } from "../../../features/toast/toastSlice";
function UserEditForm() {
  const { user, accessToken } = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    fullname: user.fullname,
    username: user.username,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPrivate.put(`/update-userInfo`, userInfo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      navigate("..");
      dispatch(throwSuccess(true, "Success", res.data.message));
    } catch (error) {
      dispatch(throwFailed(true, "Failed", "User is not Updated"));
    }
  };
  return (
    <div className="mx-auto my-2">
      <h1 className="text-center font-bold">Edit Your Profile</h1>

      <form
        onSubmit={handleSubmit}
        className="
        flex flex-col pl-3  h-[300px] w-[500px]  justify-evenly bg-slate-600"
      >
        <Link
          type="button"
          to=".."
          className="w-fit border-2 h-fit p-2 bg-teal-800 font-bold"
        >
          Cancel
        </Link>
        <span className=" underline">
          <label htmlFor="fullname">FullName:-</label>
          <input
            type="text"
            className="outline-none pl-2"
            id="fullname"
            value={userInfo.fullname}
            onChange={handleChange}
            name="fullname"
          />
        </span>
        <span className=" underline">
          <label htmlFor="username">Username:-</label>
          <input
            type="text"
            className="outline-none pl-2 "
            value={userInfo.username}
            placeholder="Username"
            onChange={handleChange}
            id="username"
            name="username"
          />
        </span>
        <span className=" underline">
          <label htmlFor="email">Email:-</label>
          <input
            id="email"
            type="text"
            className="outline-none pl-2 "
            value={userInfo.email}
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
        </span>

        <button className="bg-teal-800 h-fit w-fit place-self-center border-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserEditForm;
