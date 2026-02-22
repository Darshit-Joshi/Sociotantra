import { Route, Routes } from "react-router-dom";
import Donate from "./pages/Donate";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
