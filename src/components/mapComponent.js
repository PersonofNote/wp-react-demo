import React, { Component } from 'react';
import drawMap from './maptest.js';

export default class D3Chart extends Component {
    comonentDidMount() {
        drawMap(this.props)
    }
    componentDidUpdate(prevProps) {
        drawMap(this.props)
    }
    render() {
        return (
            <div className="d3-chart" id="worldMap" mapdata={this.props.mapfile}> </div>
        )
    }
}