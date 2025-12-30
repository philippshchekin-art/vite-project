import "../App.css";

function Button({ text = "Click", onClick, link }) {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}

export default Button;
