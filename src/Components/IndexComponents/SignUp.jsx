/* eslint-disable react/prop-types */
import { useState } from "react";
import { SignUpBtnClass } from "../../tailwindClass/BtnStyle";
import { throwFailed, throwSuccess } from "../../../features/toast/toastSlice";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../Api/userApi.js";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [userFields, setUserFields] = useState({
    username: "",
    fullname: "",
    DOB: "",
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const userFieldName = event.target.name;
    const userFieldValue = event.target.value;
    setUserFields((prev) => {
      prev[userFieldName] = userFieldValue;
      return { ...prev };
    });
  };

  const createUser = async (event) => {
    event.preventDefault();
    const response = await registerUser(userFields);
    if (response.statusCode === 200) {
      dispatch(throwSuccess(true, "Success", response.message));
      Navigate("/login");
    } else {
      dispatch(throwFailed(true, "Failed", response.message));
    }
  };

  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          action=""
          onSubmit={createUser}
          className=" flex flex-col items-center mx-auto  h-[600px] place-content-center bg-index-light  w-[400px] gap-3  border-4  border-b-index-slate700 border-r-index-slate200 border-l-index-slate700 border-t-index-slate200  "
        >
          <span className="h-10 w-[200px] font-mono text-l border-4 rounded-xl font-bold border-t-index-slate700 text-center border-l-index-slate700 border-b-index-slate200 border-r-index-slate200 ">
            <h1 className="mt-[5px]">Register Yourself</h1>
          </span>

          <Input
            inputText="Enter Name"
            inputName="fullname"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Username"
            inputName="username"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Email"
            inputName="email"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter DOB"
            inputName="DOB"
            type="date"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Password"
            inputName="password"
            type="password"
            handleUserInput={handleUserInput}
          />

          <button className={SignUpBtnClass}>Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
