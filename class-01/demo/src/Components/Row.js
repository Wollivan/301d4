import Square from "./Square";

function Row(props) {
  return (
    <div className="row">
      <Square num={props.startNum} />
      <Square num={props.startNum + 1} />
      <Square num={props.startNum + 2} />
    </div>
  );
}

export default Row;
