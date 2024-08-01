import "./App.css";
import NavBar from "./components/NavBar";
import {  Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Mca from "./components/Courses/Mca";
import Mms from "./components/Courses/Mms";
import SemOne from "./components/McaSems/SemOne";
import SemTwo from "./components/McaSems/SemTwo";
import SemThree from "./components/McaSems/SemThree";
import SemFour from "./components/McaSems/SemFour";
import MmsSemOne from "./components/MmsSems/MmsSemOne";
import MmsSemTwo from "./components/MmsSems/MmsSemTwo";
import MmsSemThree from "./components/MmsSems/MmsSemThree";
import MmsSemFour from "./components/MmsSems/MmsSemFour";

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
        <Route path="/mms" element={<Mms/>} />
        <Route path="/semOne" element={<SemOne/>} />
        <Route path="/semTwo" element={<SemTwo/>} />
        <Route path="/semThree" element={<SemThree/>} />
        <Route path="/semFour" element={<SemFour/>} />
        <Route path="/mmsSemOne" element={<MmsSemOne/>} />
        <Route path="/mmsSemTwo" element={<MmsSemTwo/>} />
        <Route path="/mmSemThree" element={<MmsSemThree/>} />
        <Route path="/mmsSemFour" element={<MmsSemFour/>} />
        </Routes>
      </div>
  
</>
  );
}

export default App;
