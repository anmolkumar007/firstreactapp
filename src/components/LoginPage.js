function LoginPage(){
    const isAuthenticated = true;
    return(
        <div>
        {
        isAuthenticated ?
        <div>
            <h3>Success</h3>
            <button class="btn btn-danger">Logout</button>
        </div>
        : 
        <div>
        <h3>Failure</h3>
        <button class="btn btn-success">Login</button>
        </div>
    }
    </div>
    )
}

export default LoginPage;