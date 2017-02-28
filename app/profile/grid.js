(function () {
'use strict';
angular
    .injector(['app'])
    .invoke(function (UserService) {
    UserService.GetCurrent().then(function (user) {
    
    if(user.week1)
    {   

    var margin = {top: 30, right: 60, bottom: 30, left: 60},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var xScale = d3.scale.linear()
    .domain([-50, 50])
    .range([0, width]);

    var yScale = d3.scale.linear()
    .domain([-50, 50])
    .range([height, 0]);

    var xAxis = d3.svg.axis().ticks(500)
    .scale(xScale)
    .orient("bottom")
    .innerTickSize(-height)
    .tickPadding(10);

    var yAxis = d3.svg.axis().ticks(500)
    .scale(yScale)
    .orient("left")
    .innerTickSize(-width)
    .tickPadding(10);

    var svg = d3.select("#canvas").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    var line1 = {
    start: {x: 0, y: 50, type: 'start'},
    finish: {x: 0, y: -50, type: 'finish'} 
    };

    var line2 = {
    start: {x: -50, y: 0, type: 'start'},
    finish: {x: 50, y: 0, type: 'finish'} 
    };

    var g = svg.append('g');

    g.append('line')
    .style('stroke', 'black')
    .attr('class', 'line')
    .attr('x1', xScale(line1.start.x))
    .attr('y1', yScale(line1.start.y))
    .attr('x2', xScale(line1.finish.x))
    .attr('y2', yScale(line1.finish.y));

    g.append('line')
    .style('stroke', 'black')
    .attr('class', 'line')
    .attr('x1', xScale(line2.start.x))
    .attr('y1', yScale(line2.start.y))
    .attr('x2', xScale(line2.finish.x))
    .attr('y2', yScale(line2.finish.y));
    
    g.append('line')
    .style('stroke', 'black')
    .attr('class', 'line')
    .attr('x1', xScale(-50))
    .attr('y1', yScale(50))
    .attr('x2', xScale(50))
    .attr('y2', yScale(50));
    
    g.append('line')
    .style('stroke', 'black')
    .attr('class', 'line')
    .attr('x1', xScale(50))
    .attr('y1', yScale(50))
    .attr('x2', xScale(50))
    .attr('y2', yScale(-50));

    svg.append('text')
    .attr('class', 'title')
    .text("Happy")
    .attr('x', xScale(51))
    .attr('y', yScale(0))
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px");

    svg.append('text')
    .attr('class', 'title')
    .text("Unhappy")
    .attr('x', xScale(-63))
    .attr('y', yScale(0))
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px");

    svg.append('text')
    .attr('class', 'title')
    .text("Alert")
    .attr('x', xScale(-3))
    .attr('y', yScale(51))
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px");

    svg.append('text')
    .attr('class', 'title')
    .text("Sleepy")
    .attr('x', xScale(-4))
    .attr('y', yScale(-53))
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px");

        for(var i = 0; i<user.week1.length; i++)
        {   
            console.log(user.week1[i].points[0]);
            console.log(user.week1[i].points[1]);
            var col = user.week1[i].color[0];
            var fill;
            if(col == "Red")
            {
                fill = "#FF0000";

            }
            else if(col == "Yellow")
            {
                fill = "#FFFF00";
            }
            else if(col == "Green")
            {
                fill = "#00ff0b";
            }
            else if(col == "Blue")
            {
                fill = "#0000FF";
            }
            else if(col == "White")
            {
                fill = "#ffffff";
            }
            else if(col == "Black")
            {
                fill = "#000000";
            }
            else if(col == "Grey")
            {
                fill = "#808080";
            }
            // drawCircle(pointx, pointy, fill);
            svg.append("circle")
                .style("fill", fill)
                .attr("cx", user.week1[i].points[0])
                .attr("cy", user.week1[i].points[1])
                .attr("r", 4);
        }
    }

    });            
    });


})();






