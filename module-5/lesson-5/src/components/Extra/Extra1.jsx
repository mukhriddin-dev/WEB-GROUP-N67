import React, { useContext } from "react";
import Extra2 from "./Extra2";
import { context } from "../context";

const Extra1 = () => {
  const result = useContext(context);

  return (
    <div className="card p-5 shadow mx-auto w-50 mt-5 bg-warning">
      <h1 className="text-center text-danger">EXTAR 1 </h1>

      <Extra2 />
    </div>
  );
};

export default Extra1;
