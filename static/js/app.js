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
//----------------Initialize default display-----------------//
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
        updateBargraph(sample1)
    })};
init()
//-------------------Function called by DOM changes-------------------//
// On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // Function called by DOM changes
// function updatePlotly() {
//------------Bar Graph-----------------//
function updateBargraph(selectName) {
    // Fetch the JSON data
    d3.json(url).then(function(data){
    
    // Filter the id of the selected dropdown option in dataset
    let sampleId = data.samples.filter(select => select.id === selectName)[0]
    console.log(sampleId)
    
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
    })};
    // Create a custom function to return players who made the team
//     function Id(selectId) {return selectId.sample}
//     // Call the custom function with filter()
//     data.filter(Id)
//     // Use D3 to select the dropdown menu
//     let userselectedId = data.names
    
//     let dropdownMenu = d3.select("#selDataset").append("option").property("value", userselectedId).text();

//     if (userselectedId == )

//     // Assign the value of the dropdown menu option to a variable
//     let dataset = dropdownMenu.property("value");
// });

//     });
    
//         // console.log(dataDemoVal)
//      
// // Call function to update the chart

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData)

// Call function to update the chart
function optionChanged(selectName) {
    Plotly.restyle("bar", "values", [selectName])
    updateBargraph(selectName);
  };
