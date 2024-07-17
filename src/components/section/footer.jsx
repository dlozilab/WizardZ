

function Footer({id,list,location}){
    console.log("Scooby" ,id, "this is my prop")
    console.log(list ,"count")
    return(
        <>
        <div className="footer">
           <h1> {id} a footer</h1>
        </div>
        
        </>
    )
}export default Footer;