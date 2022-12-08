import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="card p-5 shadow mx-auto w-75 mt-5">
      <ul className="p-4 bg-info d-flex justify-content-around w-25 list-unstyled">
        <li className="text-uppercase"><NavLink index to="/home/left">LEFT</NavLink></li>
        <li className="text-uppercase"><NavLink to="/home/right">RIGHT</NavLink></li>
      </ul>
      <div className="row">
        <div className="col p-5 shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;
