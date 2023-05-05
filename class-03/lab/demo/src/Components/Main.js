import HornedBeast from "./HornedBeast";

function Main({ beastData, handleModal }) {
  return (
    <main>
      {beastData.map((beast) => {
        return <HornedBeast beast={beast} handleModal={handleModal} />;
      })}
    </main>
  );
}

export default Main;
