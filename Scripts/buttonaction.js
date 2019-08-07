var frame =-1;

function initializeVisualization() {
    loaddata( dataloaded );
}

function dataloaded() {
    d3.select("#loading-message")
        .classed("invisible",true);
    d3.select("#chart-id")
        .classed("invisible",false);

    frameForward();
}

var animateFunctions = [
    [forward0, null],
    [forward1, backward1],
    [forward2,backward2],
    [forward3,backward3],
    [forward4,backward4]
];

function animateScene( forward ) {
    if (frame > (animateFunctions.length-1)) return;

    const animateFunction = animateFunctions[frame][(forward?0:1)];
    if (animateFunction)
        animateFunction();
}

//document.getElementById("linkinfo").innerHTML = "";
//.getElementById("chart").innerHTML = "";
function backward1()
{
    document.getElementById("nerrativemsg").innerHTML ="";
    document.getElementById("linkinfo").innerHTML = "";
    document.getElementById("chart").innerHTML = "";
    document.getElementById("linkinfo").innerHTML = "";
    document.getElementById("chart").innerHTML = "";
    document .getElementById("charttitle").innerText ="";
   // DrawPlot1
   // DrawPlot1();
}
function backward2()
{
    document.getElementById("nerrativemsg").innerHTML ="<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>Fuel Consumption </div>" +
        "<p> Fuel consumption  for  the care is main focus on </p>" +
        "<p> auto industry as house power increase for every new car</p>" +
        "<p> automobile manufactures are trying to increase the fuel efficiency every year</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +
        "<p>  This presentation , average fuel consumption for the average aged cars from  different auto manufacturer</p>" +
        "<p> is discussed by the fuel consumption of the city and highway by numbers of cylinders</p>"+
        "</div>"

    document.getElementById("linkinfo").innerHTML = "";
    document.getElementById("chart").innerHTML = "";
    document.getElementById("chart").innerHTML ="<img src=\"./Images/chart1img.jpg\" alt=\"fuel cunsumption\" width=\"460\" height=\"345\">"
    //DrawPlot1();
}

function backward3()
{
    document.getElementById("nerrativemsg").innerHTML ="<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>City Fuel Economy !!! </div>" +
        "<p> Fuel consumption  for  the care is main focus on </p>" +
        "<p> auto industry as house power increase for every new car</p>" +
        "<p> automobile manufactures are trying to increase the fuel efficiency every year</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +
        "<p>  This presentation , average fuel consumption for the average aged cars from  different auto manufacturer</p>" +
        "<p> is discussed by the fuel consumption of the city and highway by numbers of cylinders</p>"+
        "</div>"

    document.getElementById("linkinfo").innerHTML = "";
    document.getElementById("chart").innerHTML = "";
    document .getElementById("charttitle").innerText ="City Fuel Comsumption vs Cyliner";
    DrawPlot1();


}
function backward4()
{
    document.getElementById("nerrativemsg").innerHTML = "<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>Highway Fuel Consumption. </div>" +
        "<p> Highway commute are most people do and people want  maximum efficiency for the commuter. </p>" +
        "<p> Before buying car, buyer are always seeking for the mile per gallon for the car.</p>" +
        "<p> The study show the how highway mpg may vary on the manufacturers and categories such  fule type and clyinders</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +

        "</div>"
    document.getElementById("chart").innerHTML = "";
    document .getElementById("charttitle").innerText ="Highway Fuel Comsumption vs Cyliner";
    DrawPlot2();

}





function forward0(){

    document.getElementById("nerrativemsg").innerHTML ="<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>City Fuel Economy !!! </div>" +
        "<p> Fuel consumption  for  the care is main focus on </p>" +
        "<p> auto industry as house power increase for every new car</p>" +
        "<p> automobile manufactures are trying to increase the fuel efficiency every year</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +
        "<p>  This presentation , average fuel consumption for the average aged cars from  different auto manufacturer</p>" +
        "<p> is discussed by the fuel consumption of the city and highway by numbers of cylinders</p>"+
        "</div>"
    document.getElementById("linkinfo").innerHTML = "";

}


function forward1()
{
    document.getElementById("nerrativemsg").innerHTML ="<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>Fuel Consumption </div>" +
        "<p> Fuel consumption  for  the care is main focus on </p>" +
        "<p> auto industry as house power increase for every new car</p>" +
        "<p> automobile manufactures are trying to increase the fuel efficiency every year</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +
        "<p>  This presentation , average fuel consumption for the average aged cars from  different auto manufacturer</p>" +
        "<p> is discussed by the fuel consumption of the city and highway by numbers of cylinders</p>"+
         "</div>"
    document.getElementById("linkinfo").innerHTML = "";
    document.getElementById("chart").innerHTML = ""
    document.getElementById("chart").innerHTML ="<img src=\"./Images/chart1img.jpg\" alt=\"fuel cunsumption\" width=\"460\" height=\"345\">"

}
function forward2(){
    document.getElementById("nerrativemsg").innerHTML ="<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>City Fuel Economy !!! </div>" +
        "<p> Fuel consumption  for  the care is main focus on </p>" +
        "<p> auto industry as house power increase for every new car</p>" +
        "<p> automobile manufactures are trying to increase the fuel efficiency every year</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +
        "<p>  This presentation , average fuel consumption for the average aged cars from  different auto manufacturer</p>" +
        "<p> is discussed by the fuel consumption of the city and highway by numbers of cylinders</p>"+
        "</div>"
    document.getElementById("chart").innerHTML = "";
    document.getElementById("linkinfo").innerHTML = "";
    document .getElementById("charttitle").innerText ="City Fuel Comsumption vs Cyliner";

    DrawPlot1();

}

function  forward3() {
    document.getElementById("nerrativemsg").innerHTML = "<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>Highway Fuel Consumption </div>" +
        "<p> Fuel consumption  for  the care is main focus on </p>" +
        "<p> auto industry as house power increase for every new car</p>" +
        "<p> automobile manufactures are trying to increase the fuel efficiency every year</p>" +
        "<p> gas price increase and environmental air quality  control is one  major concern too.</p>" +
        "<p>  This presentation , average fuel consumption for the average aged cars from  different auto manufacturer</p>" +
        "<p> is discussed by the fuel consumption of the city and highway by numbers of cylinders</p>" +
        "</div>"
        document.getElementById("linkinfo").innerHTML = "";

        document.getElementById("chart").innerHTML = "";
        document .getElementById("charttitle").innerText ="Highway Fuel Comsumption vs Cyliner";
        DrawPlot2();

}
function  forward4()
{
    document.getElementById("chart").innerHTML = "";
    document.getElementById("nerrativemsg").innerHTML = "<div class='panel-primary' >" +
        "<div class ='panel panel-heading'>More information about Numberof Cylinders and  Auto Categories  </div>" +
        "<p>  Many factors such as fuel type, cylinders and manufactures's name and type of auto change the MPG</p>" +
        "<p>  The electric vehicles do not require any Fuel and can go beyond the what most of Fuel vehicles can do</p>" +
        "<p>  You can explore further in this chart and explore the information more</p>" +
         "<P> And  have fun!!!!!!!!!!</P>"
        "</div>"
    document .getElementById("charttitle").innerText ="Clyinder type and Consumption ";
    document.getElementById("linkinfo").innerHTML = "<div class='col-xs-3'></div>" +"</br> </br>"+ "<div class='col-xs-3'><p> <strong> For More Information </strong></p>" +
        "<p><a href='./about.html'>About</p>"

    +"</br> </br></div>";

    +""
    DrawPlot3();

}


function sene4chartDraw()
{

}
function sene3chartDraw()
{

}

function sene2chartDraw()
{

}

function frameForward() {
    if (frame === 4) return;
    frame++;
    toggleVisibility();
    toggleEnabled();
    toggleActive();
    animateScene( true );
}
function frameBackword() {
    if (frame === 0) return;
    toggleVisibility();
    toggleEnabled();
    toggleActive();
    animateScene( false );
    frame--;
}
function frameAction(newFrame ) {
    if (frame === newFrame) return;

    const framesToJump = (newFrame - frame);

    let reverse = (framesToJump < 0);

    let i = 0;
    for (i = 0; i < Math.abs(framesToJump); i++) {
        if (reverse)
            frameBackword();
        else
            frameForward();
    }
}
function toggleVisibility() {
    let className = "toggle-visibility-" + frame;

    var elements = document.getElementsByClassName(className);

    for (i=0; i < elements.length; i++) {
        elements[i].classList.toggle("invisible")
    }
}
function toggleEnabled() {
    let className = "toggle-enabled-" + frame;

    var elements = document.getElementsByClassName(className);

    for (i=0; i < elements.length; i++) {
        elements[i].classList.toggle("disabled")
    }
}
function toggleActive() {
    let className = "toggle-active-" + frame;

    var elements = document.getElementsByClassName(className);

    for (i=0; i < elements.length; i++) {
        elements[i].classList.toggle("active")
    }
}



function DrawPlot2()
{



}



function  rendercircle()
{



    var wheel = d3.component("g")
        .create(function (selection){
            var minRadius = 4,
                maxRadius = 10,
                numDots = 10,
                wheelRadius = 40,
                rotation = 0,
                rotationIncrement = 3,
                radius = d3.scaleLinear()
                    .domain([0, numDots - 1])
                    .range([maxRadius, minRadius]),
                angle = d3.scaleLinear()
                    .domain([0, numDots])
                    .range([0, Math.PI * 2]);
            selection
                .selectAll("circle").data(d3.range(numDots))
                .enter().append("circle")
                .attr("cx", function (d){ return Math.sin(angle(d)) * wheelRadius; })
                .attr("cy", function (d){ return Math.cos(angle(d)) * wheelRadius; })
                .attr("r", radius);
        })
        .render(function (selection, d){
            selection.attr("transform", "rotate(" + d + ")");
        });


    var axis = (function (){
        var axisLocal = d3.local();
        return d3.component("g")
            .create(function (selection, d){
                axisLocal.set(selection.node(), d3["axis" + d.type]());
                selection
                    .attr("opacity", 0)
                    .call(axisLocal.get(selection.node())
                        .scale(d.scale)
                        .ticks(d.ticks || 10))
                    .transition("opacity").duration(2000)
                    .attr("opacity", 0.8);
            })
            .render(function (selection, d){
                selection
                    .attr("transform", "translate(" + [
                        d.translateX || 0,
                        d.translateY || 0
                    ] + ")")
                    .transition("ticks").duration(3000)
                    .call(axisLocal.get(selection.node()));
            });
    }());
    var spinner = (function (){
        var timer = d3.local();
        return d3.component("g")
            .create(function (selection, d){
                timer.set(selection.node(), d3.timer(function (elapsed){
                    selection.call(wheel, elapsed * d.speed);
                }));
            })
            .render(function (selection, d){
                selection.attr("transform", "translate(" + d.x + "," + d.y + ")");
            })
            .destroy(function(selection, d){
                timer.get(selection.node()).stop();
                return selection
                    .attr("fill-opacity", 1)
                    .transition().duration(3000)
                    .attr("transform", "translate(" + d.x + "," + d.y + ") scale(10)")
                    .attr("fill-opacity", 0);
            });
    }());

     var scatterPlot = (function (){
        var xScale = d3.scaleLinear(),
            yScale = d3.scaleLinear(),
            colorScale = d3.scaleOrdinal()
                .range(d3.schemeCategory10);


        function render(selection, d){
            var x = d.x,
                y = d.y,
                color = d.color,
                margin = d.margin,
                innerWidth = d.width - margin.left - margin.right,
                innerHeight = d.height - margin.top - margin.bottom;

            xScale
                .domain(d3.extent(d.data, function (d){ return d[x]; }))
                .range([0, innerWidth]);
            yScale
                .domain(d3.extent(d.data, function (d){ return d[y]; }))
                .range([innerHeight, 0]);
            colorScale
                .domain(d3.extent(d.data, function (d){ return d[color]; }));

            selection
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(axis, [
                    {
                        type: "Left",
                        scale: yScale,
                        translateX: -12
                    },
                    {
                        type: "Bottom",
                        scale: xScale,
                        translateY: innerHeight + 12,
                        ticks: 20
                    }
                ])

            var circles = selection.selectAll(".point").data(d.data);
            circles.exit().remove();
            circles
                .enter().append("circle")
                .attr("class", "point")
                .attr("r", 0)
                .attr("cx", d.width / 2 - margin.left)
                .attr("cy", d.height / 2 - margin.top)
                .merge(circles)
                .on("mouseover", d.show)
                .on("mouseout", d.hide)
                .transition()
                .duration(2000)
                .delay(function (d, i){ return i * 5; })
                .attr("r", 10)
                .attr("cx", function (d){ return xScale(d[x]); })
                .attr("cy", function (d){ return yScale(d[y]); })
                .attr("color", function (d){ return colorScale(d[color]); })
        }
        return d3.component("g")
            .render(render);
    }());


    return [wheel, spinner,scatterPlot];

}



function DrawPlot2()
{
    d3.csv("./Data/car.csv", function (sample){
        sample.forEach(function (d) {
            d.Make = d.Make;
            d.CityMPG = +d.CityMPG;
            d.HighwayMPG = +d.HighwayMPG;
        });




        // console.log(data[0]);


        const svgContainer = d3.select('#container');

        const margin = 50;
        const width = 900 - 2 * margin;
        const height = 600 - 2 * margin;
        const svg =d3.select("#chart").append("svg").attr("width", 900).attr("height", 600);

        const chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(sample.map((s) => s.Cylinders))
            .padding(0.3)

        const yScale = d3.scaleLinear()
            .range([height, 0])
            //domain(sample.map((s) => s.CityMPG))
            .domain([0, 150]);

        // vertical grid lines
        // const makeXLines = () => d3.axisBottom()
        //   .scale(xScale)

        const makeYLines = () => d3.axisLeft()
            .scale(yScale)

        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        chart.append('g')
            .call(d3.axisLeft(yScale));

        // vertical grid lines
        // chart.append('g')
        //   .attr('class', 'grid')
        //   .attr('transform', `translate(0, ${height})`)
        //   .call(makeXLines()
        //     .tickSize(-height, 0, 0)
        //     .tickFormat('')
        //   )

        const annotations = [{ note: {label: "Here is the annotation label"}, title: "Annotation"}, {x:100,y:100,dy:100,dx:100}]



        chart.append('g')
            .attr('class', 'grid')
            .call(makeYLines()
                .tickSize(-width, 0, 0)
                .tickFormat('')
            )

        const barGroups = chart.selectAll()
            .data(sample)
            .enter()
            .append('g')

        barGroups
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (g) => xScale(g.Cylinders))
            .attr('y', (g) => yScale(g.HighwayMPG))
            .attr('height', (g) => height - yScale(g.HighwayMPG))
            .attr('width', xScale.bandwidth())
            .on('mouseenter', function (actual, i) {
                d3.selectAll('.HighwayMPG')
                    .attr('opacity', 0)

                d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('opacity', 0.6)
                    .attr('x', (a) => xScale(a.Cylinders) - 5)
                    .attr('width', xScale.bandwidth() + 10)

                const y = yScale(actual.CityMPG)

                line = chart.append('line')
                    .attr('id', 'limit')
                    .attr('x1', 0)
                    .attr('y1', y)
                    .attr('x2', width)
                    .attr('y2', y)

                barGroups.append('text')
                    .attr('class', 'divergence')
                    .attr('x', (a) => xScale(a.Cylindes) + xScale.bandwidth() / 2)
                    .attr('y', (a) => yScale(a.HighwayMPG) + 30)
                    .attr('fill', 'white')
                    .attr('text-anchor', 'middle')
                    .text((a, idx) => {
                        const divergence = (a.HighwayMPG - actual.HighwayMPG).toFixed(1)

                        let text = ''
                        if (divergence > 0) text += '+'
                        text += `${divergence}%`

                        return idx !== i ? text : '';
                    })

            })
            .on('mouseleave', function () {
                d3.selectAll('.HighwayMPG')
                    .attr('opacity', 1)

                d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('opacity', 1)
                    .attr('x', (a) => xScale(a.Cylinders))
                    .attr('width', xScale.bandwidth())

                chart.selectAll('#limit').remove()
                chart.selectAll('.divergence').remove()
            })

        barGroups
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xScale(a.Cylinders) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.HighwayMPG) + 30)
            .attr('text-anchor', 'middle')
            .text((a) => `${a.HighwayMPG}`)

        svg
            .append('text')
            .attr('class', 'label')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text(' Consumption (MPG) by group')

        svg.append('text')
            .attr('class', 'label')
            .attr('x', width / 2 + margin)
            .attr('y', height + margin * 1.7)
            .attr('text-anchor', 'middle')
            .text('Number of Cylinder')

        svg.append('text')
            .attr('class', 'title')
            .attr('x', width / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text('Highway MPG for Most Car')

        svg.append('text')
            .attr('class', 'source')
            .attr('x', width - margin / 2)
            .attr('y', height + margin * 1.7)
            .attr('text-anchor', 'start')
            .text('Source: car2017.csv')


    });


}
function DrawPlot1()
{

   d3.csv("./Data/car.csv", function (sample){
       sample.forEach(function (d) {
            d.Make = d.Make;
            d.CityMPG = +d.CityMPG;
            d.HighwayMPG = +d.HighwayMPG;
        });




    // console.log(data[0]);


            const svgContainer = d3.select('#container');

            const margin = 50;
            const width = 900 - 2 * margin;
            const height = 600 - 2 * margin;
            const svg =d3.select("#chart").append("svg").attr("width", 900).attr("height", 600);

            const chart = svg.append('g')
                .attr('transform', `translate(${margin}, ${margin})`);

            const xScale = d3.scaleBand()
                .range([0, width])
                .domain(sample.map((s) => s.Cylinders))
                .padding(0.3)

            const yScale = d3.scaleLinear()
                .range([height, 0])
                //domain(sample.map((s) => s.CityMPG))
                .domain([0, 150]);

            // vertical grid lines
            // const makeXLines = () => d3.axisBottom()
            //   .scale(xScale)

            const makeYLines = () => d3.axisLeft()
                .scale(yScale)

            chart.append('g')
                .attr('transform', `translate(0, ${height})`)
                .call(d3.axisBottom(xScale));

            chart.append('g')
                .call(d3.axisLeft(yScale));

            // vertical grid lines
            // chart.append('g')
            //   .attr('class', 'grid')
            //   .attr('transform', `translate(0, ${height})`)
            //   .call(makeXLines()
            //     .tickSize(-height, 0, 0)
            //     .tickFormat('')
            //   )

            const annotations = [{ note: {label: "Here is the annotation label"}, title: "Annotation"}, {x:100,y:100,dy:100,dx:100}]



            chart.append('g')
                .attr('class', 'grid')
                .call(makeYLines()
                    .tickSize(-width, 0, 0)
                    .tickFormat('')
                )

            const barGroups = chart.selectAll()
                .data(sample)
                .enter()
                .append('g')

            barGroups
                .append('rect')
                .attr('class', 'bar')
                .attr('x', (g) => xScale(g.Cylinders))
                .attr('y', (g) => yScale(g.CityMPG))
                .attr('height', (g) => height - yScale(g.CityMPG))
                .attr('width', xScale.bandwidth())
                .on('mouseenter', function (actual, i) {
                    d3.selectAll('.CityMPG')
                        .attr('opacity', 0)

                    d3.select(this)
                        .transition()
                        .duration(300)
                        .attr('opacity', 0.6)
                        .attr('x', (a) => xScale(a.Cylinders) - 5)
                        .attr('width', xScale.bandwidth() + 10)

                    const y = yScale(actual.CityMPG)

                    line = chart.append('line')
                        .attr('id', 'limit')
                        .attr('x1', 0)
                        .attr('y1', y)
                        .attr('x2', width)
                        .attr('y2', y)

                    barGroups.append('text')
                        .attr('class', 'divergence')
                        .attr('x', (a) => xScale(a.Cylindes) + xScale.bandwidth() / 2)
                        .attr('y', (a) => yScale(a.CityMPG) + 30)
                        .attr('fill', 'white')
                        .attr('text-anchor', 'middle')
                        .text((a, idx) => {
                            const divergence = (a.CityMPG - actual.CityMPG).toFixed(1)

                            let text = ''
                            if (divergence > 0) text += '+'
                            text += `${divergence}%`

                            return idx !== i ? text : '';
                        })

                })
                .on('mouseleave', function () {
                    d3.selectAll('.CityMPG')
                        .attr('opacity', 1)

                    d3.select(this)
                        .transition()
                        .duration(300)
                        .attr('opacity', 1)
                        .attr('x', (a) => xScale(a.Cylinders))
                        .attr('width', xScale.bandwidth())

                    chart.selectAll('#limit').remove()
                    chart.selectAll('.divergence').remove()
                })

            barGroups
                .append('text')
                .attr('class', 'value')
                .attr('x', (a) => xScale(a.Cylinders) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.CityMPG) + 30)
                .attr('text-anchor', 'middle')
                .text((a) => `${a.CityMPG}`)

            svg
                .append('text')
                .attr('class', 'label')
                .attr('x', -(height / 2) - margin)
                .attr('y', margin / 2.4)
                .attr('transform', 'rotate(-90)')
                .attr('text-anchor', 'middle')
                .text(' Consumption (MPG) by group')

            svg.append('text')
                .attr('class', 'label')
                .attr('x', width / 2 + margin)
                .attr('y', height + margin * 1.7)
                .attr('text-anchor', 'middle')
                .text('Number of Cylinder')

            svg.append('text')
                .attr('class', 'title')
                .attr('x', width / 2 + margin)
                .attr('y', 40)
                .attr('text-anchor', 'middle')
                .text('City MPG for Most Car')

            svg.append('text')
                .attr('class', 'source')
                .attr('x', width - margin / 2)
                .attr('y', height + margin * 1.7)
                .attr('text-anchor', 'start')
                .text('Source: car2017.csv')


   });

}
function  DrawPlot3()

{

   var circle = rendercircle();

    var spinner =circle[1];


    var scatterPlot  = circle[2];






    // Leverage the d3-tip library for tooltips.
    var tooltip = (function (){
        var tip = d3.tip()
            .attr("class", "d3-tip")
            .offset([-10, 0]);
        return function (svgSelection, state){

            // Wish we could use D3 here for DOM manipulation..
            tip.html(function(d) {
                return [
                    "<h4>" + d.Make + "</h4>",
                    "<div><strong>" + state.x + ": </strong>",
                    "<span>" + d[state.x] + "</span></div>",
                    "<div><strong>" + state.y + ": </strong>",
                    "<span>" + d[state.y] + "</span></div>",
                    "<div><strong>" + state.color + ": </strong>",
                    "<span>" + d[state.color] + "</span></div>"
                ].join("");
            });
            svgSelection.call(tip);
            return {
                show: tip.show,
                hide: tip.hide
            };
        }
    }());

    // This component manages an svg element, and
    // either displays a spinner or text,
    // depending on the value of the `loading` state.
    var svg = d3.component("svg")
        .render(function (selection, d){
            var svgSelection = selection
                .attr("width", d.width+50)
                .attr("height", d.height+50)
                .call(spinner, !d.loading ? [] : {
                    x: d.width / 2,
                    y: d.height / 2,
                    speed: 0.2
                });
            var tipCallbacks = tooltip(svgSelection, d);
            svgSelection
                .call(scatterPlot, d.loading ? [] : d, tipCallbacks);
        });

    var label = d3.component("label", "col-sm-2 col-form-label")
        .render(function (selection, d){
            selection.text(d);
        });

    var option = d3.component("option")
        .render(function (selection, d){
            selection.text(d);
        });

    var select = d3.component("select", "form-control")
        .render(function (selection, d){
            selection
                .call(option, d.columns)
                .property("value", d.value)
                .on("change", function (){
                    d.action(this.value);
                })
        });

    var rowComponent = d3.component("div", "row");
    var colSm10 = d3.component("div", "col-sm-10");
    var menu = d3.component("div", "col-sm-4")
        .render(function (selection, d){
            var row = rowComponent(selection).call(label, d.label);
            colSm10(row).call(select, d);
        });

    var menus = d3.component("div", "container-fluid")
        .create(function (selection){
            selection.style("opacity", 0);
        })
        .render(function (selection, d){
            rowComponent(selection).call(menu, [
                {
                    label: "X",
                    value: d.x,
                    action: d.setX,
                    columns: d.numericColumns
                },
                {
                    label: "Y",
                    value: d.y,
                    action: d.setY,
                    columns: d.numericColumns
                },
                {
                    label: "Color",
                    value: d.color,
                    action: d.setColor,
                    columns: d.ordinalColumns
                }
            ], d);
            if(!d.loading && selection.style("opacity") === "0"){
                selection.transition().duration(2000)
                    .style("opacity", 1);
            }
        });

    var app = d3.component("div")
        .render(function (selection, d){
            selection.call(menus, d).call(svg, d);
        });

    function loadData(actions){
        var numericColumns = [


                "HighwayMPG",
                "CityMPG",
                "Cylinders",

            ],
            ordinalColumns = [
                "Fuel",

                "Make",

                "HighwayMPG",
                "CityMPG",
                "Cylinders",

            ];

        setTimeout(function (){
            d3.csv("./Data/car.csv", type, function (data){
                actions.ingestData(data, numericColumns, ordinalColumns)
            });
        }, 3000);

        function type(d){
            return numericColumns.reduce(function (d, column){
                d[column] = + d[column];
                return d;
            }, d);
        }
    }

    function  reduce (state, action){
        var state = state || {
            width: 960,
            height: 500 - 38,
            loading: true,
            margin: {top: 12, right: 12, bottom: 40, left: 50},
            x: "HighwayMPG",
            y: "CityMPG",
            color: "Fuel"
        };
        switch (action.type) {
            case "INGEST_DATA":
                return Object.assign({}, state, {
                    loading: false,
                    data: action.data,
                    numericColumns: action.numericColumns,
                    ordinalColumns: action.ordinalColumns
                });
            case "SET_X":
                return Object.assign({}, state, { x: action.column });
            case "SET_Y":
                return Object.assign({}, state, { y: action.column });
            case "SET_COLOR":
                return Object.assign({}, state, { color: action.column });
            default:
                return state;
        }
    }

    function dispatch(dispatch){
        return {
            ingestData: function (data, numericColumns, ordinalColumns){
                dispatch({
                    type: "INGEST_DATA",
                    data: data,
                    numericColumns: numericColumns,
                    ordinalColumns: ordinalColumns
                });
            },
            setX: function (column){
                dispatch({ type: "SET_X", column: column });
            },
            setY: function (column){
                dispatch({ type: "SET_Y", column: column });
            },
            setColor: function (column){
                dispatch({ type: "SET_COLOR", column: column });
            }
        };
    }

    function draw(){

        var save= Redux.createStore(reduce),
            draw = dispatch(save.dispatch);
        generate = function(){
            d3.select("#chart").call(app, save.getState(), draw);
        }
        generate();
        save.subscribe(generate);
        loadData(draw);
    }
    draw();

}