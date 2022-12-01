import React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { context } from "./components/context";
const App = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);
let obj={
  num:111111
}

  return (
    <>
      <context.Provider value={{data, obj}}>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </context.Provider>
    </>
  );
};

export default App;
