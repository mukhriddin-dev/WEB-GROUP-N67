import React from "react";
import Extra1 from "../Extra/Extra1";
const index = () => {
  return (
    <div className="card p-5 shadow mx-auto w-50 mt-5">
      <h1 className="text-center text-danger">Home page</h1>

      <Extra1 />

      <button className="btn btn-warning"> re send</button>
    </div>
  );
};

export default index;
