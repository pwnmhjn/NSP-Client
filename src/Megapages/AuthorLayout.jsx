import { Outlet } from "react-router-dom";

function AuthorLayout() {
  return (
    <div className="mx-auto">
      <Outlet />
    </div>
  );
}

export default AuthorLayout;
