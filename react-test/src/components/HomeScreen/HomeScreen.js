import React, { Component } from 'react';
import './App.css';
import logo from '../../medical (1).svg';

class HomeScreen extends Component{
    render() {
        return(
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title"> General Hospital Tijuana HIV/Tuberculosis Patient Database </h1>
                </header>
                <p className="App-intro">
                   This is a database for the HIV And Tuberculosis Research division of the Prof. Jose Roman Chavez Mendez within  
                   the General Hospital of Tijuana, research focused on the treatment and prevention of HIV and tuberculosis viruses 
                   in our city. TThe system must be able to enter, edit and view all the information generated and associated with 
                   the investigation.
                </p>
            </div>
        )
    }
};

export default HomeScreen;

