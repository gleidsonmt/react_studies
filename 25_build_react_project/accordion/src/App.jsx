import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordian";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Accordian></Accordian>
    </div>
  );
}

export default App;
