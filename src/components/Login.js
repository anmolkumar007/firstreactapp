function Login(props){
    if(props.role==='admin'){
        return(
            <div>
                <h1> ADMIN DASHBOARD</h1>
            </div>
        )
    }
    if(props.role==='customer'){
        return(
            <div>
                <h1>CUSTOMER DASHBOARD</h1>
            </div>
        )
    }
    if(props.role==='agent'){
        <div>
            <h1>AGENT DASHBOARD</h1>
        </div>
    }
}

export default Login;