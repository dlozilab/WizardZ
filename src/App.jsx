import { useState } from "react";
import Image from "./components/image/img";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
const [oranges, setOranges] = useState(["Anne","Tucker"]);

let  profile = "Show a picture"
let List = [1,2,3]




console.log("I pulled and now I push.")

  console.log("Why so serious..........")
  console.log("Phusha")
  console.log("We are very serious")
  console.log("Lemon")
  console.log("strawberries")

  console.log("why the bicycle cant stand on it own??")


  console.log("Watermelon")
  
  

  return (
    <>
     
      <Image  id={profile}></Image> 
      

      

    
    </>
  );
}

export default App;
