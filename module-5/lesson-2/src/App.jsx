import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./pages/About";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lang } from "./lang/lang";
import { context } from "./context";
import { useState , useEffect } from "react";
import Adduser from "./components/Adduser";
import Userlist from "./components/Userlist";
import { baseURL } from "./constants";

const App = () => {
  const [langs, setLangs] = useState(localStorage.getItem("lang") || "eng");

  const [users, setUsers] = useState([]);
  

  console.log(baseURL)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch(`${baseURL}/userlist`);
      const userlist = await user.json();
      setUsers(userlist);
    };

    fetchUser();
  }, []);

  console.log(users);


  return (
    <>
      <context.Provider value={{ lang, langs, setLangs , users }}>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/task" element={<Intro />} />
              <Route path="/adduser" element={<Adduser/>} />
              <Route path="/userlist" element={<Userlist/>} />
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
