import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
      </main>
      <Footer />
    </>
  );
};

export default App;
