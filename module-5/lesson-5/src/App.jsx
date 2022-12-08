import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Countries from "./components/Countries";
import Country from "./Country";
import  Left from "./pages/Left";
import Right from "./pages/Right";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:names" element={<Country />} />
        <Route path="/home" element={<Home />}>
          <Route  index path="/home/left" element={<Left />}/>
          <Route path="/home/right" element={<Right />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
