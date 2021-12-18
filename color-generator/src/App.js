import "./App.css";
import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(new Values("#32CD32").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setColorList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <main className="main-container">
        <header className="main-header">
          <h3>Color Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className={`${error ? "input-error" : null}`}
              placeholder="#"
            />
            <button className="submit-btn">Submit</button>
          </form>
        </header>
        <section className="colors-grid-container">
          {colorList.map((color, index) => {
            return (
              <div className="single-color-div">
                <SingleColor
                  key={index}
                  {...color}
                  hex={color.hex}
                  index={index}
                />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
``;
r;
