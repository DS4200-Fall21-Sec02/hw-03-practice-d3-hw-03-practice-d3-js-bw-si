// write your javascript code here.
// feel free to change the preset attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// first visualization
let svg1 = d3.select('#vis1')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', '#ccc') // change the background color to light gray
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))
            margin = 200,
            width = svg.attr("width") - margin, //300
            height = svg.attr("height") - margin //200

console.log("Hello World")
        // Step 1
        var dataset1 = [
        [.5, .5], [.2, .4], [1, 1],
        [.4, .4], [.1, .3], [1,.5]
        ];

	var goalsPerList = [];
	var assistsPerList = [];
	var dataset2 = new Array(50).fill(0).map(() => new Array(2).fill(0));


	d3.csv("data/Scatter_data.csv").then(function(data) {
	    for (var i = 0; i < data.length; i++) {
        	console.log(data[i].Name);
        	console.log(data[i].GoalsPer);
	//	goalsPerList.push(parseFloat(data[i].GoalsPer));
	//	assistsPerList.push(parseFloat(data[i].AssistsPer));
		
		dataset2[i][0]=parseFloat(data[i].GoalsPer);
		dataset2[i][1]=parseFloat(data[i].AssistsPer);

		//dataset2.push(Array(parseFloat(data[i].GoalsPer),parseFloat(data[i].AssistsPer)));
   	 }

        // Step 4 
        var xScale = d3.scaleLinear().domain([0, 2]).range([0, width]),
            yScale = d3.scaleLinear().domain([0, 2]).range([height, 0]);
            
        var g = svg1.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

        // Step 5
        // Title
        svg1.append('text')
        .attr('x', width/2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Goals vs. Assists NHL Legends');
        
        // X label
        svg1.append('text')
        .attr('x', width/2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Goals Per Game');
        
        // Y label
        svg1.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Assists Per Game');

        // Step 6
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));
        
        g.append("g")
         .call(d3.axisLeft(yScale));
        
        // Step 7
        svg1.append('g')
        .selectAll("dot")
        .data(dataset2)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 2)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000");


	});






// second visualization
let svg2 = d3.select('#vis2')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', '#ccc') // change the background color to light gray
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))







