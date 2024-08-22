import React, { useState } from "react";
import { useOutletContext, Link, useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../../Api/Api";
import { useDispatch } from "react-redux";
import { throwSuccess, throwFailed } from "../../../features/toast/toastSlice";

function CoverEdit() {
  const { accessToken, user } = useOutletContext();
  const [cover, setCover] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmt = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("coverImage", cover);
    try {
      const res = await axiosPrivate.put("/update-cover", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      const message = res.data.message;
      dispatch(throwSuccess(true, "Success", message));
      navigate("..");
    } catch (error) {
      const errMessage = error.response.data.message;
      dispatch(throwFailed(true, "Failed", errMessage));
      navigate("..");
    }
  };

  return (
    <>
      <div className="flex relative font-mono flex-col text-center place-items-center">
        <Link
          to=".."
          className="bg-teal-800 absolute left-4 h-fit w-fit p-2 border-2 mt-4"
        >
          Back
        </Link>
        <h1 className="my-4 font-bold underline">Edit Cover Image</h1>
        <div className="w-80">
          <img src={user.coverImage} alt="" />
        </div>
        <form
          onSubmit={handleFormSubmt}
          className="mt-4 flex flex-col place-items-center"
        >
          <span>
            <input
              onChange={(e) => setCover(e.target.files[0])}
              name="cover"
              type="file"
              id="cover"
            />
          </span>
          <button className="block h-fit w-fit m-2 p-2 bg-teal-800">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CoverEdit;
