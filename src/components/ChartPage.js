import React from 'react';
import Header from './Header.js';
import D3Chart from './mapComponent.js';
//For testing
const mapfile = 'https://PersonofNote.github.io/d3-visualization-map-test/world-110m.geojson'


export default function GraphPage() {
  return (
    <div className="content">
        <Header title="Graph Page"/>
        <D3Chart mapdata={mapfile} />
    </div>
  )
}