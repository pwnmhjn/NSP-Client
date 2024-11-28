import { Outlet } from "react-router-dom";
import { InfoSection, IndexHeader } from "../Components/IndexComponents";
function IndexLayout() {
  return (
    <div className="w-full bg-index-lessLight mt-[100px] ">
      <IndexHeader />
      <div className="text-center flex place-items-center justify-center h-screen w-full rounded-lg  m-1 ">
        <div className="flex lg:gap-56 md:gap-40 gap-28 ">
          <div className="place-self-center ">
            <InfoSection />
          </div>
          <div className="place-self-center ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexLayout;
