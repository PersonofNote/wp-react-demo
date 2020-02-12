import React from 'react';
import Header from '../components/Header.js';
import D3BarChart from '../components/D3BarChart.js';
//Practice using hooks; may be better wrapped into the chart class itself
import { useState, useEffect } from 'react';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function calculateSVGWidth(size) {
 return size.width > 1050 ? "800" : size.width;
}

//For testing only; with more time, would consider how to build blocks from which to get data to construct a chart based on editor input
var data = [{label: 'a', value: 4, color: '#F8B195' }, {label: 'b', value: 8, color: '#F67280'}, {label: 'c', value: 15, color: '#C06684'},{label: 'd', value: 2, color: '#6C5B7B'}];


// TODO: Update width on window resize (opportunity for React hook?)

export default function GraphPage() {
  const size = useWindowSize();
  const svgWidth = calculateSVGWidth(size);
  return (
    <div className="content">
        <Header title="Graph Page"/>
        <div>
        </div>
        <D3BarChart height={size.height} width={svgWidth} data={data} />
    </div>
  )
}
			