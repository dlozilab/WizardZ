import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);



console.log("try again and pull")

  return (
    <>
      <h1>My name is {oranges[0]}</h1>
    </>
  );
}

export default App;
