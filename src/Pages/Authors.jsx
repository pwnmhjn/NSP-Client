import React, { useEffect, useState } from "react";
import { AuthorDetail } from "../Components/AuthorComponents";
import { Link, Outlet } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { selectUser } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import Pagination from "../Custom/Pagination/Pagination";
function Authors() {
  const { accessToken } = useSelector(selectUser);
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);
  const [totalAuthors, setTotalAuthors] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [authorPerPage, setAuthorPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axiosPrivate("/authors/get-authors", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      const receivedData = res.data.data;
      setTotalAuthors(receivedData);
    })();
    setLoading(false);
  }, []);

  const indexOfLastAuthor = currentPage * authorPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - authorPerPage;

  const authorsDetail =
    totalAuthors && totalAuthors.slice(indexOfFirstAuthor, indexOfLastAuthor);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex w-full  justify-center items-center">
      <div className=" my-10 flex-col flex gap-6 ">
        {authorsDetail &&
          authorsDetail.map((author) => {
            return (
              <Link to={`${author._id}`} key={author._id}>
                <AuthorDetail author={author} />
              </Link>
            );
          })}
        <div>
          <Pagination
            totalAuthors={totalAuthors && totalAuthors.length}
            authorPerPage={authorPerPage}
            paginate={paginate}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Authors;
