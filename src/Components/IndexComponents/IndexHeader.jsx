import logo from "../assets/logo.png";
import { Button } from "../../Custom";
function IndexHeader() {
  return (
    <>
      <header className=" h-[100px] fixed top-0 p-1 bg-index-dark rounded-b-lg w-full grid grid-cols-12 ">
        <div className="logo-section col-span-3 grid grid-cols-2 ">
          <div className="logo-image col-span-1 ">
            <span className="h-22 w-22 border-1 ">
              <img src={logo} alt="" />
            </span>
          </div>
          <h1 className="logo-name col-span-1 mt-1 font-mono text-3xl">
            Nerd&apos;s Paradise
          </h1>
        </div>
        <div className="col-span-6"></div>
        <div className="col-span-1  flex flex-col  h-fit w-fit border-4 place-content-center border-r-custom-slate200 border-b-custom-slate200 border-t-index-slate700 border-l-index-slate700 ">
          <Button linkName="SignIn" to={"/register"} />
          <Button linkName="Login" to={"/login"} />
        </div>
        <span className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1 ">
          <Button linkName="About" to="/index-about" />
        </span>
        <span className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1 ">
          <Button linkName="Admin" to="/admin" />
        </span>
      </header>
    </>
  );
}

export default IndexHeader;
