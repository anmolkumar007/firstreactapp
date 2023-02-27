import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class FetchMedicines extends React.Component {
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
                <h2>Medicine List</h2>
                <div className='table-responsive'>
                    <table className='table  table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>medicine id</th>
                                <th>medicine name</th>
                                <th> medicine cost</th>
                            </tr>
                        </thead>

                        {
                            this.state.medicines.map(med =>
                                <tbody>
                                    <tr key={med.medicineId}>
                                        <td>{med.medicineId}</td>
                                        <td>{med.medicineName}</td>
                                        <td>{med.medicineCost}</td>
                                    </tr>
                                </tbody>

                            )
                        }
                    </table>
                </div>
                <div>
                    <Link to='/'>Go to home</Link>
                </div>
            </div>
        )
    }

}

export default FetchMedicines;