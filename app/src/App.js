
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/style.css";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/resources";
import Dashboard from "./pages/tasks";

function App() {
  return (

    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Login />} />
        <Route path="/task" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;