import React, { Component } from 'react';
import styled from 'styled-components';
import PatientList from './PatientList/PatientList';

const PatientContainerStyle = styled.div`
    text-align: center;
    margin: 25px;
`;

class PatientInfoRequests extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: [],
            patients: []
        }
        this.filterList = this.filterList.bind(this);
    }
    componentDidMount() {
        this.getItems(); //activate this
        var testPatients=[{
            patient_id: 1111,
            first_name : 'Andres',
            last_name: 'Manuelovsky',
            age: 57,
            nationality: 'Rusa',
            contact_info: 'andres@putin.com',
            phone_number: '6666666666',
            applicant_unit: '1' 
        },{
            patient_id: 1112,
            first_name : 'Andres',
            last_name: 'Manuelovish',
            age: 57,
            nationality: 'Rusa',
            contact_info: 'andres@putin.com',
            phone_number: '6666666666',
            applicant_unit: '1' 
        }]; //Eliminate this

        //this.setState({patients: testPatients, searchResults: testPatients})

        //this.setState({patients: testPatients, searchResults: testPatients}) //Also this

    }
    getItems(){
        fetch('http://ec2-18-218-177-24.us-east-2.compute.amazonaws.com:8000/api/patients/')
            .then(results => results.json())
            .then(results => this.setState({patients: results, searchResults: results}));   
    }
    filterList(event){
        var updatedList = this.state.patients;
        updatedList = updatedList.filter(function(item){
            return item.last_name.toLowerCase().search(
              event.target.value) !== -1;
        });
        this.setState({searchResults: updatedList});
        event.preventDefault();
    }
    preventReload(event){
        event.preventDefault();
    }
    render(){
        return(
            <PatientContainerStyle>
                <div>
                    <form onSubmit={this.preventReload}>
                        <fieldset className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                        </fieldset>
                    </form>
                </div>
                <h1>Patient List</h1>
                <PatientList patients={this.state.searchResults}/>
            </PatientContainerStyle>
        )
    }
}

export default PatientInfoRequests;