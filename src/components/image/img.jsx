import Imojie from "../image/imojie.jpg";


function Image({id,list}){


    console.log(id)
    console.log(list)
    return(
    <img id="Imojie" src={Imojie}></img>
    )

}

export default Image;