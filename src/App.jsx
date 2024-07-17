import { useState } from "react";
import Logo from "./components/logo/logo"
import "./App.css";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);

let name = "sunny"
let arr =[1,2,3]




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
      <Logo id={name} list={arr} />
     <section><Text id={learnProp} list={list} loc={location}/></section>
    </>
  );
}

export default App;
