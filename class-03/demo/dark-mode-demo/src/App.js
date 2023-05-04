import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={theme}>
      <Header theme={theme} />
      <Main handleTheme={handleTheme} />
    </div>
  );
}

export default App;
