import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/section/footer";

function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);
let scoopy = "Dooo";
const list = [1,2,3];
const pmb = ["riverside", "indumiso"]

console.log(list ,"ect")
console.log("I pulled and now I push.")

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("Always git push")

  console.log("why the bicycle cant stand on it own??, its too tired")
  console.log("Watermelon")



  return (
    <>
      <h1 >My name is {oranges[0]}</h1>
 

      <footer >
        <Footer id={scoopy} list={list} location={pmb}/>
      </footer>

    
    </>
  );
}

export default App;
