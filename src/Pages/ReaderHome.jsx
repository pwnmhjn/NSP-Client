import { useSelector } from "react-redux";
import useRefreshToken from "../../hooks/useRefreshToken";
import { selectUser } from "../../features/user/userSlice";
import useLogout from "../../hooks/useLogout";
import User from "../Admin/User";
import { useNavigate } from "react-router-dom";
import { ChapArticle } from "../Components/ReaderComponents";

function ReaderHome() {
  return (
    <div>
      <div className="">
        <ChapArticle />
      </div>
    </div>
  );
}

export default ReaderHome;
