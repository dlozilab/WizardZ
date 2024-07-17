import { useState } from "react";
import Image from "./components/image/img";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Text from "./components/text/text";
import "./App.css";
import Logo from './components/logo/logo'


function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);



console.log("I pulled and now I push.")

let learnProp = "Learner";
let list = [1, 2, 3];
let location = "PMB";

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
     <h1 id={profile} list={List}></h1>
     <Image/>
     <Logo id={name}  list={arr} location={city}/>
     <section> <Text id={learnProp} list={list} loc={location}/></section>
    </>
  );
}

export default App;
