import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./starRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        size={24}
        color="orange"
        maxRating={10}
        onSetRating={setMovieRating}
      />
      <h2>This movie was rated {movieRating} </h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      size={24}
      messages={["Terriable", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={4}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
