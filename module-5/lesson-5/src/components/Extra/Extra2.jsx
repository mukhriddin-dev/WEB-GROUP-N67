import React, { useContext } from "react";
import Extra3 from "./Extra3";
import { context } from "../context";

const Extra2 = () => {
  const number = useContext(context);



  return (
    <>
      <div className="card p-5 shadow mx-auto w-50 mt-5 bg-danger w-100">
        <h3 className="text-center text-light">EXTRA 2 </h3>

        <Extra3 />
      </div>
    </>
  );
};

export default Extra2;
