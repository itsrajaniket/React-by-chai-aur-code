import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(9);

  // let counter = 115;
  const addValue = () => {
    console.log(counter, Math.random());
    // counter += 1;
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("stop");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("STOP");
    }
  };

  return (
    <>
      <h1>new project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}> Remove value</button>
    </>
  );
}

export default App;
