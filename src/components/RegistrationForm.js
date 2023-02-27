import React from 'react';
class RegistrationForm extends React.Component{
    constructor(){
        super();
        this.state={
            fname:'',
            lname:'',
            email:'',
            mnum:''
        }
    }

    inputChange=(event)=>{
        this.setState({[event.target.name] : event.target.value})  
    }

    submitFunction=()=>{
        alert("form submitted successfully")
    }

    render(){
        return(
            <div>
                <div>
                    <label>First Name</label>
                    <input type="text" name="fname" value={this.state.fname} placeholder='enter first name'
                    onChange={this.inputChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lname" value={this.state.lname} placeholder='enter last name'
                    onChange={this.inputChange}/>
                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.email} placeholder='enter email address'
                    onChange={this.inputChange}/>
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input type="number" name="mnum" value={this.state.mnum} placeholder='enter mobile number'
                    onChange={this.inputChange}/>
                </div>
                <button onClick={this.submitFunction} class="btn btn-primary">Register</button>
            </div>
        )
    }
}

export default RegistrationForm;