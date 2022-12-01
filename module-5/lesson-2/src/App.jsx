import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./pages/About";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lang } from "./lang/lang";
import { context } from "./context";
import { useState } from "react";

const App = () => {

  const [langs, setLangs] = useState(localStorage.getItem("lang") || "eng");
  
 
  return (
    <>
      <context.Provider value={{ lang, langs, setLangs }}>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/task" element={<Intro />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </context.Provider>
    </>
  );
};

export default App;
