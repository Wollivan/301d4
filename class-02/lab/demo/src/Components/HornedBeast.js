import { useState } from "react";

function HornedBeast(props) {
  const [votes, setVotes] = useState(0);

  function handleClick() {
    setVotes(votes + 1);
  }

  return (
    <div className="horned-beast">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.description}</p>
      <p onClick={handleClick}>❤️: {votes}</p>
    </div>
  );
}

export default HornedBeast;
