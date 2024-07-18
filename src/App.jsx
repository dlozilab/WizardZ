import { useState } from "react";
import Image from "./components/image/img";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Text from "./components/text/text";
import "./App.css";
import Button from "./components/button/button";
import Footer from "./components/section/footer";
import Logo from './components/logo/logo'


function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);
let scoopy = "Dooo";
const list = [1,2,3];
const pmb = ["riverside", "indumiso"]

let name = "sunny"
let arr =[1,2,3]




console.log(list ,"ect")
console.log("I pulled and now I push.")
console.log("I pulled and now I push, Now merge.")

let learnProp = "Learner";
let list = [1, 2, 3];
let location = "PMB";

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("Always git push")

  console.log("why the bicycle cant stand on it own??, its too tired")
  console.log("Watermelon")
  console.log("anything")



  return (
    <>
      <Logo id={name} list={arr} />
    
      <h1 >My name is {oranges[0]}</h1>
 

      <footer >
        <Footer id={scoopy} list={list} location={pmb}/>
      </footer>

    
      <Text id={learnProp} list={list} loc={location}/>
    </>
  );
}

export default App;
