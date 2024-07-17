import Logo from "../logo/Nike-Logo.png"

const logo =({id, list, location}) =>{
    console.log("this is my prop " + id)
    console.log("this is my list " + list)
    console.log("Mlab location " + location)

return (
    <>
    <img src={Logo} alt=""  
    style={{width:"10%", height:"12%"}}
    />
        
    </>
)
}

export default logo