//For testing; in production would require only needed modules
import * as d3 from "d3";

//

export default function drawMap(props) {
    console.log(props)
    const worldMapSvg = d3.select('#worldMap');

    const gMap = worldMapSvg.append('g');
    const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

    const projection = d3.geoMercator()
    .center([2, 47])
    .scale(100);

  d3.json(props.mapData, (data) => {
    const land = gMap.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('class', 'landpath')
      .attr('d', d3.geoPath()
        .projection(projection))
      .on('mouseover', (d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip.html(d.properties.name)
          .style('left', `${d3.event.pageX + 25}px`)
          .style('top', `${d3.event.pageY - 28}px`);
      })
      .on('mouseout', (d) => {
        tooltip.transition()
          .duration(300)
          .style('opacity', 0);
      });
  });

function animateMove() {
  const land = gMap.selectAll('path');
  land.style('fill', '#a9bcd0')
    .attr('transform', (d) => randomizePos(d))
    .transition()
    .delay(200)
    .duration(1000)
    .ease(d3.easePolyOut)
    .attr('transform', 'translate(0,0)');
}

function randomizePos(d) {
  // TODO: Implement more elegant const declaration
  const maxx = window.innerHeight * 2;
  const minx = window.innerHeight;
  const maxy = window.innerWidth * 2;
  const miny = window.innerWidth;
  let tx = Math.random() * (maxx - minx) + minx;
  let ty = Math.random() * (maxy - miny) + miny;
  tx *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  if (d.properties.name != 'Antarctica') {
    ty *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  }
  return `translate(${tx}, ${ty})`;
}


}