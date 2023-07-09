import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import About from "./components/About";
import Contact from "./components/Contact";

import "./style/header.scss";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<About />} />
      </Routes>
     
    </Router>
  );
}

export default App;
