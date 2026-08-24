
import Card from "../components/card/card";
import Input from "../components/input/input";

import { BookOpenText, Search } from "lucide-react";

function Dashboard() {
  return (

    <div className = "container">

        <div className = "search-container">
          <Input></Input>
        </div>

        <div className="center-line"></div>

        <div className = "card-container">
          <Card
            icon = {BookOpenText}
            title = "Libro: Meditación de mis Cojones Morenos"
            description = "Libro de ajsd jaskd askd afkjas klgaslkgjaklsjglkasj kglajsklgjaklsgjklaskl gjaskljgklsajgkl jasklgjklasjgklasjlkg jasklg jasklgjkl"
          />
        </div>

    </div>

  );
}

export default Dashboard;