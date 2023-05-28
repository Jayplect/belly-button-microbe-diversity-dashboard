// --------------------------BELLY BUTON DASHBOARD BUILD-------------------------//
//////////////////////////////////////////////////////////////////////////////////

// Use the D3 library to read in samples.json from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it specified variables to peruse
d3.json(url).then(function(data) {
    console.log(data)
    console.log(data.names)
    console.log(data.samples);
  });
//---------------------Initialize default display---------------------//
// Initialize and Display the default plot
function init(){
    // Create a drop-down menu for each id
    let dropdown = d3.select("#selDataset");
    // Fetch data
    d3.json(url).then(function(data) {
    // Append names to the dropdown menu using the forEach function
        let nameIds = data.names
        nameIds.forEach(function(nameId) {
        dropdown.append("option").property("value", nameId).text(nameId)
    });
        // Select the first array of data for plotting
        let sample1 = nameIds[0]
        console.log(sample1)
        // call plot function to initialize display
        updatePlots(sample1)
        updateDemo(sample1)
 })};

// Function called by DOM changes
function updatePlots(selectName) {
    // Fetch the JSON data
    d3.json(url).then(function(data){
    
    // Filter by the id of selected dropdown option
    let sampleId = data.samples.filter(select => select.id === selectName)[0]
    console.log(sampleId)

//-----------------------------Bar Graph---------------------------------//  
    // Add ploting paramters for Bar graph
    let trace1 = {
        x: (sampleId.sample_values).slice(0,10).reverse(),
        y: (sampleId.otu_ids).map(object => `OTU_${object}`).slice(0,10).reverse(),
        name: "Top 10 OTUs",
        type: "bar",
        text: (sampleId.otu_labels).slice(0,10).reverse(),
        orientation: "h",
        marker: {
            color: 'lightblue'},
        line: {
                width: 2.5
            } 
    };

    // Data trace array
    let traceData =[trace1];

    // Apply a title to the layout
    let layout = {
        title: " Top 10 OTUs ",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        },
        font: {size: 15}
        // height: 600,
        // width: 800
    };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", traceData, layout);

//------------------------------Bubble Chart------------------------------//
    // Add ploting paramters for bubble graph
    let trace2 = {
        x: sampleId.otu_ids,
        y: sampleId.sample_values,
        name: "Distribution of OTUs",
        mode: "markers",
        text: (sampleId.otu_labels),
        orientation: "h",
        marker: {
            size: sampleId.sample_values,
            color: sampleId.otu_ids
        },
        line: {
                width: 2.5
            }
    };
    // Data trace array
    let traceData2 =[trace2];

    // Apply a title to the layout
    let layout2 = {
        title: "Distribution of OTUs",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        },
        xaxis: {title: 'OTU ID'},
        font: {size: 15}
    };
    
    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot("bubble", traceData2, layout2);
})};

//------------------------------Demographic Info------------------------------//
// Function called by DOM changes
function updateDemo(selectName) {
        // Fetch the JSON data
    d3.json(url).then(function(data){

        // Add Demographic Info 
    let sampleMeta = data.metadata.filter(select => select.id == selectName)[0]
    // set html to null
    d3.select(".panel-body").html("")
    // https://stackoverflow.com/questions/7241878/for-in-loops-in-javascript-key-value-pairs
    Object.entries(sampleMeta).forEach(([key, value]) => d3.select(".panel-body")
        .append("h5")
        .text(`${key}:${value}`)
        .style("color", "darkblue")
    )}
)};
    // for (var k in sampleMeta){
    //     if (typeof target[k] !== 'function') {
    //         d3.select(".panel-body").append("h6").text(`${k}:${target[k]}`)}
    // }
    // })};

        // })};
        // for (let i =0; i < data.length; i++){
        //     d3.select(".panel-body")
        //     .append("h6")
        //     .text(`${keys}`)
        // }
        

    

        

// Call function to update the chart
function optionChanged(selectName) {
    Plotly.restyle("bar", "values", [selectName])
    Plotly.restyle("bubble", "values", [selectName])
    updatePlots(selectName)
    updateDemo(selectName)
    
    // Plotly.restyle("bubble", "values", [selectName])
    // updateChart(selectName)
  };

  init();