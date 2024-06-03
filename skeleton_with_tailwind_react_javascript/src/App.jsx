import { useState } from "react";
import "./App.css";
import GoogleIcon from "./components/icons/GoogleIcon";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="flex flex-row gap-10">
      <Button variant="text">First Button</Button>
      <Button variant="outlined">First Button</Button>
    </div>
  );
}

export default App;
