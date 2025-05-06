import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <BrowserRouter>
        <Navbar /> 
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
