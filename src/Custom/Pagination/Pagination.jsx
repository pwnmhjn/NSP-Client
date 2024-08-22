import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ authorPerPage, totalAuthors, paginate }) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalAuthors / authorPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      {pageNumber.map((number) => {
        return (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="h-fit   w-fit bg-slate-600 m-2 p-2 "
          >
            {number}{" "}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
