import React, { useState } from "react";

function AuthorDetail({ author }) {
  return (
    <div>
      <div className="bg-slate-400 h-28 w-[500px] rounded-lg flex place-items-center p-4 border-2">
        <img
          src={author && author.avatar}
          alt=""
          className="w-24 h-24 rounded-full border-1"
        />
        <div className="m-2">
          <h1 className="font-bold font-mono text-xl">
            Name:- {author && author.name}
          </h1>
          <h1 className="font-bold font-mono text-xl">
            Popularity:-{" "}
            <span className="text-red-900">{author.popularity}%</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;
