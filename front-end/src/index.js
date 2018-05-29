import React from 'react';
import ReactDOM from 'react-dom';

class PatientList extends React.Component {
    constructor(){
        super();
        this.state = {
            'patients': []
        }
    }
    componentDidMount() {
        this.getItems();
    }

    getItems(){
        fetch('http://localhost:8000/api/patients/')
            .then(results => results.json())
            .then(results => this.setState({'patients': results}));
    }
    render(){
        return (
            <ul>
                {this.state.patients.map(function(patient, index){
                    return (
                        <div key={index}>
                            <h1>{patient.first_name} {patient.last_name}</h1>
                            <p>{patient.gender}</p>
                            <p>{patient.age}</p>
                            <p>{patient.nationality}</p>
                            <p>{patient.contact_info}</p>
                            <p>{patient.phone_number}</p>
                            <p>{patient.applicant_unit}</p>
                        </div>
                    )
                })}
            </ul>
        );
    }
}

ReactDOM.render(
    <PatientList />,
    document.getElementById('root')
);