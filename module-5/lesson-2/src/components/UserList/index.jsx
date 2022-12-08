import React, { useContext } from "react";
import { context } from "../../context";
const index = () => {
  const {users} = useContext(context);

  console.log(users);

  return (
    <>
      <div className="card shadow mx-auto p-4 w-75">
        <ul className="input-group">
          
        </ul>
      </div>
    </>
  );
};

export default index;
