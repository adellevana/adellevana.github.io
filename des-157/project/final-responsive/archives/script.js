/* dummy trace data into chart */

var trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
  y: [1, 1, 2, 3, 4, 4, 4, 4, 2, 1, 3, 4, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 5, 5, 5, 5, 4],
  mode: 'markers',
  type: 'scatter',
  name: 'Feeling',
  marker: {color: '#83B5E9', size: 16}
};

/* setting boundaries and prep for charting data */

var data = [trace1];
var layout = {
  xaxis: {
    range: [0, 31.5]
  },
  yaxis: {
    range: [0, 5.5]
  },
  title: 'MARCH 2018',
  font: {
    family: 'Montserrat, sans-serif',
    size: 12,
    color: '#000'
  },
  xaxis:{zeroline:false, title: 'Date of Entry'},
  yaxis:{zeroline:false, title: 'Feeling Scale'}
};

/* plot data */

Plotly.newPlot(chartDiv, data, layout);

/* innerHTML space for content to load */

document.getElementById("textDiv").innerHTML = "ENTRY OF MARCH 21, 2018 <br><br> Today, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pellentesque tortor, nec auctor eros. Vestibulum nec efficitur elit. Curabitur ac diam magna. In eget leo risus. Nunc neque lectus, convallis vitae purus sed, pretium sollicitudin purus. Praesent hendrerit eget ante vel scelerisque. Ut magna leo, elementum lobortis porta sit amet, rutrum id velit. Nunc vulputate turpis ante, eu mattis nisl facilisis sed. <br><br> Suspendisse accumsan porta auctor. Vivamus suscipit lorem a turpis malesuada, sit amet tincidunt lorem rutrum. Aliquam posuere ornare condimentum. Sed a faucibus nulla, nec pretium leo. Phasellus in dui mi. Fusce non turpis mi.";

document.getElementById("form").addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("results").className = "";
}, false);
