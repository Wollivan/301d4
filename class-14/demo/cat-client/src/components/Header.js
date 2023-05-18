import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>CATS</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  );
}
