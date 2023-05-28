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
        updatePlotly(sample1)
        // updateChart(sample1)
    })};

//-------------------Function called by DOM changes-------------------//
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", updatePlotly);   
function updatePlotly(selectName) {
    // Fetch the JSON data
    d3.json(url).then(function(data){
    
    // Filter the id of the selected dropdown option in dataset
    let sampleId = data.samples.filter(select => select.id === selectName)[0]
    console.log(sampleId)

//-----------------------------Bar Graph---------------------------------//    
        let trace1 = {
            x: (sampleId.sample_values).slice(0,10).reverse(),
            y: (sampleId.otu_ids).map(object => `OTU_${object}`).slice(0,10).reverse(),
            name: "Top 10 OTUs",
            type: "bar",
            text: (sampleId.otu_labels).slice(0,10).reverse(),
            orientation: "h",
            marker: {
                color: '#C8A2C8'},
            line: {
                    width: 2.5
                }
            
        };
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

        Plotly.newPlot("bar", traceData, layout);
  

//------------------------------Bubble Chart------------------------------//
        let trace2 = {
            x: sampleId.otu_ids,
            y: sampleId.sample_values,
            name: "Distribution of OTUs",
            mode: "markers",
            text: (sampleId.otu_labels),
            orientation: "h",
            marker: {
                colorscale: "Orange",
                size: sampleId.sample_values,
                color: sampleId.otu_ids
            },
            line: {
                    width: 2.5
                }
            
        };
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
            // height: 600,
            // width: 800
        };

        Plotly.newPlot("bubble", traceData2, layout2);
    })};


// Call function to update the chart
function optionChanged(selectName) {
    Plotly.restyle("bar", "values", [selectName])
    updatePlotly(selectName)
    // Plotly.restyle("bubble", "values", [selectName])
    // updateChart(selectName)
  };

  init();