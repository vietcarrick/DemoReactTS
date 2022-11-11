import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../dropdown/Dropdown";

const Right = () => {
  return (
    <div className="flex gap-4 items-center w-[25%] justify-end">
      <Dropdown />
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup">
      <button className="btn btn-primary">Sign Up</button>
      </Link>
    </div>
  );
};

export default Right;
