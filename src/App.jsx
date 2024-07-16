import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Text from "./components/text/text";
import "./App.css";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);



console.log("I pulled and now I push.")

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("Always git push")

  console.log("why the bicycle cant stand on it own??")
  console.log("branch added")

  console.log("Watermelon")

  return (
    <>
      <h1>My name is {oranges[0]}</h1>
      <section><Text/></section>
    </>
  );
}

export default App;
