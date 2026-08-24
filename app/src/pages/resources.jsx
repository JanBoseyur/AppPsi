
import Card from "../components/card/card";
import { BookOpenText } from "lucide-react";

function Dashboard() {
  return (

    <div className = "container">
      
        <Card
          icon = {BookOpenText}
          title = "Libro: Meditación de mis Cojones Morenos"
          description = "Libro de ajsd jaskd askd afkjas klgaslkgjaklsjglkasj kglajsklgjaklsgjklaskl gjaskljgklsajgkl jasklgjklasjgklasjlkg jasklg jasklgjkl"
        />

        <Card
          icon = {BookOpenText}
          title = "Libro: Meditación de mis Cojones Morenos"
          description = "Libro de ajsd jaskd askd afkjas klgaslkgjaklsjglkasj kglajsklgjaklsgjklaskl gjaskljgklsajgkl jasklgjklasjgklasjlkg jasklg jasklgjkl"
        />

        <Card
          icon = {BookOpenText}
          title = "Libro: Meditación de mis Cojones Morenos"
          description = "Libro de ajsd jaskd askd afkjas klgaslkgjaklsjglkasj kglajsklgjaklsgjklaskl gjaskljgklsajgkl jasklgjklasjgklasjlkg jasklg jasklgjkl"
        />

    </div>

  );
}

export default Dashboard;