import { Outlet } from "react-router-dom";
import { InfoSection, IndexHeader } from "../Components/IndexComponents";
function IndexLayout() {
  return (
    <div className="w-full mt-[100px] ">
      <IndexHeader />
      <div className="text-center h-screen w-full rounded-lg  bg-index-lessLight m-1  grid grid-cols-12    ">
        <InfoSection />
        <Outlet />
      </div>
    </div>
  );
}

export default IndexLayout;
