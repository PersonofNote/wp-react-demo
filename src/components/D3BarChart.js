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
            <div class='container'>
                <h2> Sample Bar Chart </h2>
                <div ref="d3Chart" className='bar-chart-container'>
                    <div className="d3-chart" id="bar-chart"  data={this.props}> </div>
                </div>
            </div>
        )
    }
}