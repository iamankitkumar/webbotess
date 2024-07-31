import "./App.css";
import NavBar from "./components/NavBar";
import {  Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Mca from "./components/Courses/Mca";

function App() {
  return (
  <>
  
      <NavBar />

      <div className="pages">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/mca" element={<Mca/>} />
        </Routes>
      </div>
  
</>
  );
}

export default App;
