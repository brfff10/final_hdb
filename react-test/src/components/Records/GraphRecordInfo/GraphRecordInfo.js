import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer, Legend } from 'recharts';
import styled from 'styled-components';

const BarChartStyle = styled.div`
    text-align: center;
    display: inline-block;
`;

class GraphRecordInfo extends Component{
    constructor(){
        super()
        this.state = {
            data:''
        };
    }
    render(){
        return(
            <BarChartStyle>
                <BarChart width={600} height={300} data={this.props.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </BarChartStyle>
        )
    }
}

export default GraphRecordInfo;