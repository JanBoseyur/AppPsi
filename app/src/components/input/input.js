
import "../input/input.css";

import { TextField, Button, Box } from "@mui/material";
import { Search } from "lucide-react";

function Input(){
  return (

    <div className = "input">

        <div className = "search-container">
            <Search size = {24}/>
            <input type = "text" placeholder = "Meditacion, Mindfulness..."></input>

            <Button class = "button">Buscar</Button>
        </div>

    </div>

  );
}

export default Input;