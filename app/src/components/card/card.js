
import "../card/card.css";

function Card({ icon: Icon, title, description }) {
  return (

    <div className = "card">

      <div className = "title-icon">
        <Icon size = {24} />
        <h2>{title}</h2>
      </div> 

      <p>{description}</p>
    </div>

  );
}

export default Card;