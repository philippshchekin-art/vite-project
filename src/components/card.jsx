import "../App.css";
import Button from "./button";

function Card({ title, description }) {
  function handleClick() {
    alert("Card button clicked");
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text="Learn more" onClick={handleClick} />
    </div>
  );
}

export default Card;
