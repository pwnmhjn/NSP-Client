import PrivateRoute from "./Components/PrivateRoute.jsx";
// import PersistLogin from "./Components/PersistLogin.jsx";
import { Toast } from "./Custom/index.js";
import { IndexLayout, ReaderLayout, AuthorLayout } from "./Megapages";
import { Admin, Author, Book, Chapter } from "./Admin";
import User from "./Admin/User.jsx";

import {
  ReaderHome,
  ReaderAbout,
  Profile,
  IndexAbout,
  Authors,
  AuthorInfo,
} from "./Pages/index.js";
import { remove, SelectToast } from "../src/features/toast/toastSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, SignUp } from "./Components/IndexComponents";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  AvatarEdit,
  CoverEdit,
  UserEditForm,
} from "./Components/ReaderComponents/index.js";

function App() {
  const dispatch = useDispatch();
  const toast = useSelector(SelectToast);
  // console.log(JSON.stringify(import.meta.env)); //TODO  Config ENV
  const cancelToast = () => {
    dispatch(remove());
  };

  if (toast.visible === true) {
    setTimeout(() => {
      dispatch(remove());
    }, 2000);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route path="/index-about" element={<IndexAbout />} />
        {/* //?Protected Route (Readers) */}
        {/* <Route element={<PersistLogin />}> */}
        <Route element={<PrivateRoute />}>
          <Route path="reader" element={<ReaderLayout />}>
            <Route index element={<ReaderHome />} />
            <Route path="authors" element={<AuthorLayout />}>
              <Route index element={<Authors />} />
              <Route path=":id" element={<AuthorInfo />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route path="edit" element={<UserEditForm />} />
              <Route path="avatar-edit" element={<AvatarEdit />} />
              <Route path="cover-edit" element={<CoverEdit />} />
            </Route>
            <Route path="about" element={<ReaderAbout />} />
          </Route>
          {/* //?------------------------------------------ */}
          <Route path="/admin" element={<Admin />}>
            <Route
              index
              // errorElement={<h1>did not found Data</h1>}
              element={<User />}
            />
            <Route path="book" element={<Book />} />
            <Route path="author" element={<Author />} />
            <Route path="chapter" element={<Chapter />} />
          </Route>
        </Route>
        {/* </Route> */}
      </Route>
    )
  );

  return (
    <div className="relative">
      <RouterProvider router={router} />
      {toast.visible && (
        <Toast
          title={toast.title}
          message={toast.message}
          cancelToast={cancelToast}
        />
      )}
    </div>
  );
}

export default App;
