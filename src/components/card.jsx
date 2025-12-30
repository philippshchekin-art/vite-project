import "../App.css";
import Button from "./button";

function Card({ title, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text="Learn more" link={link} />
    </div>
  );
}

export default Card;
