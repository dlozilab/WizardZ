import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);
const colours = ["red", "blue"];



console.log("I pulled and now I push.")

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("Always git push")

  console.log("why the bicycle cant stand on it own??")


  console.log("Watermelon")
  console.log("anything")

  return (
    <>
      <h1>My name is {oranges[0]}</h1>
      <h1 id={colours}>My favourite colour is {colours[1]}</h1>
    </>
  );
}

export default App;
