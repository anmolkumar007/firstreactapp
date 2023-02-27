const Target = (props) => {
    return(
        <div>
            <h4>Target</h4>
            <p>{props.msg}</p>
            <p>Car name : {props.obj.name}</p>
            <p>Car brand : {props.obj.brand}</p>
            <p>Car color : {props.obj.color}</p>
        </div>
    )
}

export default Target;