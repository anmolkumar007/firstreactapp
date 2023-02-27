import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class AddMedicine extends React.Component{
    constructor(){
        super();
        this.state={
            mname:'',
            mcost:'',
            cname:'',
            mfd:'',
            expd:'',
            stk:'',
            rate:'',
            mdet:'',
            mtype:'',
            ingrdt:'',
            quant:''
        }
    }

    medInput=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleButton=()=>{
        const payload ={
            medicineName: this.state.mname,
            medicineCost: this.state.mcost,
            companyName: this.state.cname,
            manufactureDate: this.state.mfd,
            expiryDate: this.state.expd,
            stock:this.state.stk,
            rating: this.state.rate,
            description: {
    
                details: this.state.mdet,
                medicineType: this.state.mtype,
                ingredients: this.state.ingrdt,
                quantity: this.state.quant
            }
        }
       axios.post("http://localhost:8080/medicine/addMedicine",payload).then(resp=>{
        alert("Medicine added");
       }); 
    }
    render(){
        return(
            <div className='container'>
                <div className='form-group'>
                    <label>Medicine Name</label>
                    <input type='text' name='mname' value={this.state.mname} placeholder='enter medicine name'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Medicine Cost</label>
                    <input type='number' name='mcost' value={this.state.mcost} placeholder='enter medicine cost'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Company Name</label>
                    <input type='text' name='cname'value={this.state.cname} placeholder='enter company name'
                    onChange={this.medInput} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Manufacture Date</label>
                    <input type='date' name='mfd' value={this.state.mfd} onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Expiry Date</label>
                    <input type='date' name='expd' value={this.state.expd} onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Stock</label>
                    <input type='number' name='stk' value={this.state.stk} placeholder='enter the value of stock'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Rating</label>
                    <input type='number' name='rate' value={this.state.rate} placeholder='enter rating'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Medicine Details</label>
                    <input type='text' name='mdet' value={this.state.mdet} placeholder='enter the details of the medicine'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Type of medicine</label>
                    <input type='text' name='mtype' value={this.state.mtype} placeholder='enter the type of the medicine'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Ingredients</label>
                    <input type='text' name='ingrdt' value={this.state.ingrdt} placeholder='enter ingredients'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Quantity (in gms)</label>
                    <input type='number' name='quant' value={this.state.quant} placeholder='enter quantity'
                    onChange={this.medInput} className='form-control'/>
                </div>
                <button onClick={this.handleButton} class="btn btn-primary form-control">Add medicine</button>
                <div>
                    <Link to='/'>Go to home</Link>
                </div>
            </div>
        )
    }
}

export default AddMedicine;