import React, { Component } from 'react';
import drawChart from '../functions/BarChart.js';


export default class D3BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    
    componentDidMount() {
        drawChart(this.props)
    }
    componentDidUpdate() {
        drawChart(this.props)
    }

    render() {
        return (
            <div className='bar-chart-container'>
                <div className="d3-chart" id="bar-chart" width={this.props.width} data={this.props}> </div>
            </div>
        )
    }
}