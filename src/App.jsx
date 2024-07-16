import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);



console.log("I pulled and now I push.")

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("Banana's")
  console.log("Lemon")

  return (
    <>
      <h1>My name is {oranges[0]}</h1>
    </>
  );
}

export default App;
