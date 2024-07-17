

function Footer({id,list,location}){
    console.log("Scooby" ,id, "this is my prop")
    console.log(list ,"count")
    return(
        <>
        <div className="footer">
            {location} a footer
        </div>
        
        </>
    )
}export default Footer;