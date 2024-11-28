import logo from "../assets/logo.png";
import { Button } from "../../Custom";

function IndexHeader() {
  return (
    <>
      <header className="h-[100px] fixed top-0 p-1 bg-index-dark rounded-b-lg w-full flex justify-between items-center">
        <div className="logo-section flex items-center">
          <div className="logo-image lg:mt-12 mt-3">
            <img
              className="lg:h-44 h-28  "
              src={logo}
              alt="Nerd's Paradise Logo"
            />
          </div>
          <h1 className="logo-name  font-mono font-bold text-3xl">
            Nerd&apos;s <br /> Paradise
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex  mr-5 flex-col items-center border-4 border-r-custom-slate200 border-b-custom-slate200 border-t-index-slate700 border-l-index-slate700">
            <Button linkName="SignIn" to={"/register"} />
            <Button linkName="Login" to={"/login"} />
          </div>

          <div className="md:flex gap-2 hidden">
            <span className="text-xl  text-black">
              <Button linkName="About" to="/index-about" />
            </span>
            <span className="text-xl text-black">
              <Button linkName="Admin" to="/admin" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default IndexHeader;
