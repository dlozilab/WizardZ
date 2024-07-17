import { useState } from "react";
import Image from "./components/image/img";
import Text from "./components/text/text";
import "./App.css";
import Logo from './components/logo/logo'


function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);
let name = "sunny"
let arr = [1, 2, 3]
let city = "PMB"


let  profile = "Show a picture"
let List = [1,2,3]


console.log("I pulled and now I push.")

let learnProp = "Learner";
let list = [1, 2, 3];
let location = "PMB";

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("strawberries")

  console.log("why the bicycle cant stand on it own???")

  console.log("why the bicycle cant stand on it own??")
  console.log("branch added")

  console.log("Watermelon")
  
  

  return (
    <>
      

      <Logo id={name}  list={arr} location={city}/>

      {/* <h1>My name is {oranges[0]}</h1> */}
      <section id={learnProp}><Text/></section>
      {/* <div id={list}></div>
      <div id={location}></div> */}
     
     <Image/>

      
    </>
  );
}

export default App;
