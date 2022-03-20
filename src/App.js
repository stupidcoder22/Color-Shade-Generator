import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setlist(colors);
      console.log(colors);
    } catch (error) {
      seterror(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Rang Generator</h3>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={color}
            placeholder="f15025"
            className={`${error ? "error" : null}`}
            onChange={(e) => {
              setcolor(e.target.value);
            }}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const hexcolor = color.hex;
          return (
            <SingleColor
              key={index}
              {...color}
              hexcolor={hexcolor}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
