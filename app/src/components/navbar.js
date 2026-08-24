
import { NavLink } from "react-router-dom";
import { Home, SquareText, ClipboardList } from "lucide-react";

function Navbar() {
  return (
    
    <div className = "body">

      <nav className = "navbar">    

        <div className = "nav-content">

          <NavLink className = "nav-item" to="/resources">
            <SquareText size = {24}/>
            <span>Materiales</span>
          </NavLink>

          <NavLink className = "nav-item-home" to="/">
            <Home size = {24} />  
          </NavLink>
          
          <NavLink className = "nav-item" to="/tasks">
            <ClipboardList size = {24} />
            <span>Tareas</span>
          </NavLink>

        </div>

      </nav>

    </div>

  );
}

export default Navbar;