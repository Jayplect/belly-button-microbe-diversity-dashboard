## Overview
The belly button is a peculiar habitat that houses a lot of microbes yet it remains unexplored. The Public Science lab in January 2011, undertook a research to investigate the Biodiversity of microbes in the human navel as well as the beneficial roles microbes play in our daily lives. In this project, I built an interactive dashboard to explore the  <a href ="http://robdunnlab.com/projects/belly-button-biodiversity/">Belly Button Biodiversity datasetLinks</a>, which catalogs the microbes that colonize human navels.

## Tools Used
![D3](https://img.shields.io/badge/d3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-239120?style=for-the-badge&logo=plotly&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## Summary of Dataset
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. The <a href = "https://github.com/Jayplect/belly-button-dashboard/tree/main/data">samples.json</a> file was not accessed locally but it is provided for reference.

## Project Steps
Firstly, I created an app that renders data dynamically to the dashboard upon request. I used the D3 library and a promise function `then` to read in samples.json from the <a href ="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"> URL</a> and log the data for inspection. Following that, I built a function that initializes a default display.The default display was the first sample of the data. One important feature of the dashboard is a dropdown menu that can be used to select choice id representing an individual for viewing. Upon user selection of id, the barplot- showing the top top 10 OTUs found in that individual `(Fig 1)`, the distribution of the OTU `(Fig 2)`, the washing frequency for the individual's belly button `(Fig 3)` and the individual's demographic information `(Fig 4)` are all updated on the dashboard `(Fig 5)`. 

- Fig 1: Horizontal bar chart display of the Top 10 OTU. The sample values represent the y-axis for the bar chart. While the OTU ids served as the labels for the bar chart. I also added a chart feature that allows hovertext for the OTU labels.

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/b5129e2c-b4fb-4a5a-91f4-f0cb51a7e97c)

- Fig 2: Bubble chart showing the distribution of OTU in an individual. The OTU ids and sample values served as the x values and y values respectively. The sample values represent the marker size while the OTU ids (i.e., the composition of bacteria) served as the the marker colors. Again, I also added a chart feature that allows hovertext for the OTU labels.

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/cd298cc0-77e4-45d1-9e18-5c9afc28dcbd)

- Fig 3:  Guage chart showing the weekly washing frequency of an individual.

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/aa3657cc-67aa-4dfe-a679-81ad217d54d1)

- Fig 4: The sample metadata, i.e., an individual's demographic information.
 
![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/698e6ed9-3d83-49c4-9e4a-453fe85d1208)

- Fig 5: Dashboard to explore the microbes in a selected individual's belly button

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/04597161-37b9-4e2a-9856-02c49ca6428a)

## Deployment of Dashboard 
I deployed my app to a free static page hosting service. <a href = "https://jayplect.github.io/belly-button-microbe-diversity-dashboard/">Click here<a/> to view. For best experience open dashboard with full view.

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links.
