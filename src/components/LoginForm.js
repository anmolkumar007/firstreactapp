import React from 'react';
import {Link} from 'react-router-dom';
class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            uname:"",
            upswd:""
        }
    }

    handlingUsernameChange = (event)=>{
        this.setState({
            uname : event.target.value
        })
    }

    handlingPasswordChange=(event)=>{
        this.setState({
            upswd:event.target.value
        })
    }

    handlingSubmit=()=>{
        if(this.state.upswd=='1234'){
            alert("Welcome "+this.state.uname);
        } 
        else
            alert("Login Failed");
    }

    render(){
        return(
            <div className='container'>
                <div className='form-group'>
                    <label>Username</label>
                    <input type="text" name="uname" placeholder='enter username' value={this.state.uname}
                     onChange={this.handlingUsernameChange} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' name='upswd' placeholder='enter password' value={this.state.upswd}
                    onChange={this.handlingPasswordChange} className='form-control'/> 
                </div>
                <div>
                    <button onClick={this.handlingSubmit} className="btn btn-success form-control">Login</button>
                </div>

                <div>
                    <Link to='/'>Go to home</Link>
                </div>

            </div>
        )
    }
}
export default LoginForm;