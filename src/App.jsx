import { useState } from "react";
import Logo from "./components/logo/logo"
import "./App.css";
import Button from "./components/button/button";
import Footer from "./components/section/footer";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);
let scoopy = "Dooo";
const list = [1,2,3];
const pmb = ["riverside", "indumiso"]

let name = "sunny"
let arr =[1,2,3]




console.log(list ,"ect")
console.log("I pulled and now I push.")




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
     <section><Text id={learnProp} list={list} loc={location}/></section>
      
      <h1 >My name is {oranges[0]}</h1>
 

      <footer >
        <Footer id={scoopy} list={list} location={pmb}/>
      </footer>

    
    </>
  );
}

export default App;
