import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/card.jsx";
import Counter from "./components/counter.jsx";
import { cards } from "./data/cardData.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="card">
      <Counter />
    </div>
    <div className="cardContainer">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  </StrictMode>
);
