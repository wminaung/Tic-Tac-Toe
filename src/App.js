import "./App.css";
import { useEffect } from "react";

import { Game } from "./Game";

function App() {
  useEffect(() => {
    console.count("App is render");
  });
  return (
    <div className="App mt">
      <Game />
    </div>
  );
}

export default App;
