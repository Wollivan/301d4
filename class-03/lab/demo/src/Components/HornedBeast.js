import { useState } from "react";

function HornedBeast({ beast, handleModal }) {
  const [votes, setVotes] = useState(0);

  function handleClick() {
    setVotes(votes + 1);
  }

  return (
    <div className="horned-beast">
      <h2>{beast.title}</h2>
      <img src={beast.image_url} alt={beast.title} onClick={() => handleModal(beast)} />
      <p>{beast.description}</p>
      <p onClick={handleClick}>❤️: {votes}</p>
    </div>
  );
}

export default HornedBeast;
