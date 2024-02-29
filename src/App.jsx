import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [texts, setTexts] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setTexts(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>bored of using lorem ipsum text?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">count</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={9}
          step={1}
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn">generate</button>
      </form>
      <div>
        {texts.map((text) => {
          return (
            <p style={{ margin: "1rem" }} key={nanoid()}>
              {text}
            </p>
          );
        })}
      </div>
    </section>
  );
};
export default App;
