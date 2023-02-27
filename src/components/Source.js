import Target from "./Target";

const Source =()=>{
    const sampleText = "hello world";
    const car = {
        name : "GTR",
        brand : "Nissan",
        color: "steel grey"
    }
    return(
        <div>
            <h4>Source</h4>
            <Target msg={sampleText} obj={car}/>
        </div>
    )
}

export default Source;