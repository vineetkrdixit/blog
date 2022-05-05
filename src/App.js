import "./App.css";
import Header from "../src/components/header/Header";
// import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Contactus from "./components/Contactus/Contactus";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Aboutus" element={<Aboutus />}></Route>
          <Route path="/Contactus" element={<Contactus />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
