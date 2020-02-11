import React, { Component } from 'react';
import drawGraph from '../functions/ChartTest.js';


export default class D3BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        drawGraph(this.props)
    }

    render() {
        return (
            <div className='bar-chart-container'>
                <div className="d3-chart" id="bar-chart" data={this.props}> </div>
            </div>
        )
    }
}