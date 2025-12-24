import "../App.css";

function Button({ text = "Click", onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
