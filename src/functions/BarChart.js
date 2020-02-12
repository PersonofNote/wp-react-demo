/**
 * Simplified implementation of the base process found here: 
 * 
 * https://towardsdatascience.com/react-d3-the-macaroni-and-cheese-of-the-data-visualization-world-12bafde1f922
 * 
 * Graph is modification of base tutorial here:
 * https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4
 * 
 * Animation from
 * https://www.d3-graph-gallery.com/graph/barplot_animation_start.html
 * 
 */

//For testing; in production would require only needed modules
import * as d3 from "d3";

export default function drawChart(data) {
    console.log(data.width);
    d3.selectAll('#bar-chart').selectAll('svg').remove();
    var width = data.width
    var height = data.height
    var x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);
    var y = d3.scaleLinear()
        .range([height, 0]);
    
    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select('#bar-chart').append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${height} ${width}`)
        .attr("preserveAspectRatio", "xMinYMin meet")
        .append("g");

    // Scale the range of the data in the domains
    x.domain(data.data.map(function(d) { return d.label; }));
    y.domain([0, d3.max(data.data, function(d) { return d.value; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data.data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.label); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", function(d) { return d.color} );

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    };