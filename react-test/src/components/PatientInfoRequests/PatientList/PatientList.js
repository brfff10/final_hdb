import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const PatientStyled = styled.button`
    box-shadow: 0px 0px 10px 0px #333;
    width: 700px;
    height: 250px;
    text: center;
    background-color: white;
    margin: 5px
`;

const ListStyle = styled.div`
    display: center;
`;

class PatientList extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: true
        }
    }
    render(){
        return (
            <ul>
                {this.props.patients.map(function(patient, index){
                    
                    var link = "/record/"+patient.patient_id; //change this to actual query
                    return (
                        <ListStyle key={index}>                           
                            <PatientStyled disabled>
                                <a href={link}>{patient.first_name} {patient.last_name}</a>
                                <p>Gender: {patient.gender}</p>
                                <p>Age: {patient.age}</p>
                                <p>Nationality: {patient.nationality}</p>
                                <p>Contact info: {patient.contact_info}</p>
                                <p>Phone number: {patient.phone_number}</p>
                                <p>Applicant unit: {patient.applicant_unit}</p>
                            </PatientStyled>
                        </ListStyle>
                    )
                })}
            </ul>
        );
    }
}

export default PatientList;