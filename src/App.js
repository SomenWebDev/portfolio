import "./App.css";
import Navbar from "./components/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/Home/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
