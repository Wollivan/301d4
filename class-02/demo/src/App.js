import "./App.css";
import { useState } from "react";

function App() {
  // [stateVariable, mutationFunction] = useState(initalValue)
  const [votes, setVotes] = useState(0); //returns an array like: [variable, function]

  function handleClick() {
    setVotes(votes + 1);
  }

  return (
    <div className="App">
      <h1>State {votes * 2}</h1>
      <button onClick={handleClick}>Click me to increase the love!</button>
      <h3>❤️ = {votes}</h3>
    </div>
  );
}

export default App;
