import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  let [light, setLight] = useState(false);
  return (
    <section>
      <div className="container">
        <button className="my-btn"
          onClick={() => {
            setLight(!light);
            document.body.classList.toggle("light");
          }}
        >
          Light: {light ? "ON" : "OFF"}
        </button>
      </div>
    </section>
  );
};

export default ThemeChanger;
