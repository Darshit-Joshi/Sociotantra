import { Route, Routes } from "react-router-dom";
import Donate from "./pages/Donate";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
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
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
