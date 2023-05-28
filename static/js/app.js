// Use the D3 library to read in samples.json from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
// Display the default plot
// let sampleValues = d3.select
// let select = d3.select("#selDataset")

// 
// let option = select.append("option")

// change text to otu_ids
// let text = option.text("text")

// On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);
// Function called by DOM changes

d3.json(url).then(function(data){
    console.log(data)

    // console.log(dataDemoVal)
    let trace1 = {
                x: (data.samples[0].sample_values).slice(0,10).reverse(),
                y: (data.samples[0].otu_ids).map(object => `OTU_${object}`).slice(0,10).reverse(),
                name: "Demo",
                type: "bar",
                orientation: "h"
                }
    let traceData =[trace1]
    
    // Apply a title to the layout
    let layout = {
        title: " Top 10 OTUs ",
        // margin: {
        //     l: 100,
        //     r: 100,
        //     t: 100,
        //     b: 100
        // }
        // height: 600,
        // width: 800
    };
  
    Plotly.newPlot("bar", traceData, layout);
});

// Call function to update the chart

// On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

