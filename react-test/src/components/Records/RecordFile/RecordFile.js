import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const RecordStyled = styled.div`
    box-shadow: 0px 0px 10px 0px #333;
    width: 700px;
    height: 800px;
    text: center;
    background-color: white;
    margin: 5px;
    display: inline-block;
`;

const ListStyle = styled.div`
    display: center;
`;

const InputStyle = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #CCC;
    display: inline-block;
`;

class RecordFile extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: true,
            edit: false,
            records: '',
        }
        this.EnableEdit = this.EnableEdit.bind(this);
        this.SubmitInfo = this.SubmitInfo.bind(this);
        this.EditInfo = this.EditInfo.bind(this);
        this.SubmitInfo = this.SubmitInfo.bind(this);
    }
    EnableEdit(){
        this.setState({edit: true, records: this.props.record})
    }
    
    SubmitInfo(){
        var record = this.state.records;
        fetch('http://ec2-18-218-177-24.us-east-2.compute.amazonaws.com:8000/api/patients/1/record/1', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: record
          })
    }
    EditInfo(e){
        var record = this.state.records;
        var key = e.target.placeholder.split(' ');
        record[key[0]] = e.target.value;
        
        this.setState({records : record})
    }
    render(){
        if (this.props.record && !this.state.edit){
            return (
                <ul>
                    <button onClick={this.EnableEdit}>Edit</button>
                    <ListStyle >                           
                        <RecordStyled >
                            
                            <p>{this.props.record.patient.first_name} {this.props.record.patient.last_name}</p>
                            <p>Gender: {this.props.record.patient.gender}</p>
                            <p>Age: {this.props.record.patient.age}</p>
                            <p>Nationality: {this.props.record.patient.nationality}</p>
                            <p>Contact info: {this.props.record.patient.contact_info}</p>
                            <p>Phone number: {this.props.record.patient.phone_number}</p>
                            <p>Applicant unit: {this.props.record.patient.applicant_unit}</p>
    
                            <p>entry_date: {this.props.record.entry_date}</p>
                            <p>update_date: {this.props.record.update_date }</p>
                            <p>blood_type: {this.props.record.blood_type }</p>
                            <p>diabetes: {this.props.record.diabetes }</p>
                            <p>sample_type: {this.props.record.sample_type }</p>
                            <p>deceased: {this.props.record.deceased }</p>
                            <p>subtype: {this.props.record.subtype }</p>
                            <p>resistance: {this.props.record.resistance }</p>
                            <p>children: {this.props.record.children }</p>
                            <p>english: {this.props.record.english }</p>
                            <p>sexual_preference: {this.props.record.sexual_preference }</p>
                            <p>immigration_hist: {this.props.record.immigration_hist }</p>
                            <p>insurance: {this.props.record.insurance }</p>
                            <p>drug_use: {this.props.record.drug_use }</p>
                            <p>shared_needles: {this.props.record.shared_needles }</p>
                            <p>criminal_record: {this.props.record.criminal_record }</p>
                            <p>birth_place: {this.props.record.birth_place }</p>
                            <p>job: {this.props.record.job }</p>
                            
                        </RecordStyled>
                    </ListStyle>
                </ul>
            );
        } else if(this.props.record && this.state.edit){
            var self = this;
            return(
                <ul>
                    <button onClick={this.SubmitInfo}>Submit</button>
                    <form onSubmit={this.SubmitInfo}>
                        {EditForms(this.props.record, self)}
                    </form>
                </ul>
            );
        }else {
            return(
                <p> Loading </p>
            )
        }
       
    }
}

function EditForms(records, self){
    var forms = [];
    for (var keyValue in records){
        if (keyValue != "patient" && keyValue != "record_id"){
            forms.push(
                <input key={keyValue} placeholder={keyValue + " : " + records[keyValue]} onChange={self.EditInfo}/>
            );    
        }
            
    }
    
    return forms;
};


export default RecordFile;

/*
{
    "record_id": 1,
    "patient": {
        "patient_id": 3,
        "first_name": "Joe",
        "last_name": "Doe",
        "gender": "M",
        "age": 30,
        "nationality": "MEX",
        "contact_info": "",
        "phone_number": "6641886594",
        "applicant_unit": "UC"
    },
    "entry_date": "2018-05-24T22:45:55.959000Z",
    "update_date": "2018-05-26T00:44:54.871046Z",
    "birth_date": "1996-05-17",
    "blood_type": "O",
    "diabetes": "N",
    "sample_type": "",
    "deceased": "",
    "subtype": "",
    "resistance": "",
    "children": "",
    "english": "",
    "sexual_preference": "",
    "immigration_hist": "",
    "insurance": "",
    "drug_use": "",
    "shared_needles": "",
    "criminal_record": "",
    "birth_place": null,
    "job": null
}


*/