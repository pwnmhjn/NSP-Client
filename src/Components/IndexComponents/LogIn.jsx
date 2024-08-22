import Input from "./Input";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogInBtnClass } from "../../tailwindClass/BtnStyle";
import { throwFailed, throwSuccess } from "../../../features/toast/toastSlice";
import { setUser } from "../../../features/user/userSlice";
import { logUser } from "../../../Api/userApi.js";

function LogIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.from?.pathname || "/reader";
  const dispatch = useDispatch();
  const [userFields, setUserFields] = useState({
    username: "",
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
  const LogIn = async (event) => {
    event.preventDefault();

    const response = await logUser(userFields);
    if (response.statusCode === 200) {
      const user = response.data.user;

      dispatch(setUser({ user: user, accessToken: response.data.accessToken }));
      dispatch(throwSuccess(true, "Success", response.message));
      navigate(from, { replace: true });
      navigate("/reader");
    } else {
      dispatch(throwFailed(true, "Failed", response.message));
    }
  };
  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          onSubmit={LogIn}
          className=" flex flex-col items-center mx-auto  h-[400px] place-content-center bg-index-light  w-[400px] gap-3  border-4  border-t-index-slate700 border-l-index-slate700 border-r-index-slate200 border-b-index-slate200  "
        >
          <span className="h-10 w-[100px] font-mono text-l border-4 rounded-xl font-bold border-t-index-slate700 text-center border-l-index-slate700 border-r-index-slate200 border-b-index-slate200  ">
            <h1 className="mt-[5px]">LogIn</h1>
          </span>

          <Input
            inputText="Enter Username"
            inputName="username"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Password"
            inputName="password"
            type="password"
            handleUserInput={handleUserInput}
          />

          <button className={LogInBtnClass}>Log In</button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
