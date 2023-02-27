import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            medicines: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/medicine/allMedicines")
            .then(resp => {
                console.log(resp);
                this.setState({
                    medicines: resp.data
                })
            })
    }
    render() {
       
        return (
           <div className='container'>
            <div className='card-columns'>
                {
                    this.state.medicines.map(med=>
                        <div className='card bg-light' key={med.medicineId}>
                            <img class="card-img-top" src="https://blog-images-1.pharmeasy.in/2020/10/30173447/shutterstock_647337493-1.jpg"
                             ></img> 
                        <div className='card-body text-center'> 
                            <p className='card-text'><b>MEDICINE ID</b>:{med.medicineId}</p>
                            <p className='card-text'><b>MEDICINE NAME</b>:{med.medicineName}</p>
                            <p className='card-text'><b>MEDICINE COST</b>:{med.medicineCost}</p>
                            <a href='#' className='stretched-link'>View medicine</a>
                        </div>
                        </div>)
                }
                    
                </div>
            </div>
            
           
        )
    }

}

export default Card;