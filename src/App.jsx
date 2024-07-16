import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/button"
import Button from "./components/button";
function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);



console.log("I pulled and now I push.")

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("Always git push")

  return (
    <section> <Button/> </section>
  );
}

export default App;
