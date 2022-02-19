import { useState } from "react";
import "./App.css";
import Button from "./Button.js"

function App() {
  const [color, setColor] = useState("blue");

  // Adding event-listener

  return (
    <div className={`App ${color}`}>
      <div className="container">
        <h1>SUPER MARIO EFFECT!!!</h1>

        <button
          className="yellow"
          onClick={() => {
            console.log("clicked!!");
            setColor("yellow");
          }}
        >
          YELLOW
        </button>

        <button
          className="red"
          onClick={() => {
            console.log("Bazinga");
            setColor("red");
          }}
        >
          RED
        </button>

        <button
          className="grey"
          onClick={() => {
            console.log("Bazinga3");
            setColor("grey");
          }}
        >
          GREY
        </button>

        {/* Reusability of using hooks using another component  */}

        <Button color="Orange" setColor={setColor}/>
        <Button color="Magenta" setColor={setColor}/>
        <Button color="Teal" setColor={setColor}/>
      </div>
    </div>
  );
}

export default App;
