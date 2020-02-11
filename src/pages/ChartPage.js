import React from 'react';
import Header from '../components/Header.js';
import D3BarChart from '../components/D3BarChart.js';

//For testing

var data = [{label: 'a', value: 4}, {label: 'b', value: 8}, {label: 'c', value: 15},{label: 'd', value: 2}];
var margin = {top: 20, right: 20, bottom: 30, left: 40}

export default function GraphPage() {
  return (
    <div className="content">
        <Header title="Graph Page"/>
        <D3BarChart height='500' width="500" margin={margin} data={data} />
    </div>
  )
}
			