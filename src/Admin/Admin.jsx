import { Outlet } from "react-router-dom";
import Button from "../Custom/Button";
import User from "./User";

function Admin() {
  return (
    <div className="bg-index-lessLight h-screen w-full">
      <div className=" h-24 bg-index-dark rounded-b-lg w-full flex place-items-center justify-evenly">
        <Button linkName={"Book"} to={"book"} />
        <Button linkName={"Author"} to={"author"} />
        <Button linkName={"Chapter"} to={"chapter"} />
        <Button linkName={"Home"} to={"/"} />
      </div>
      <Outlet />
      <User />
    </div>
  );
}

export default Admin;
