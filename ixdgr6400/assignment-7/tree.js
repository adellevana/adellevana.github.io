var margin = {top: 10, right: 20, bottom: 20, left: 200},
    width = 1050 - margin.right - margin.left,
    height = 960 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

// Generate bezier
var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select(".container").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var treeData =
{
  "name": "George Windsor",
  "img": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMzA3MTY2MDI2NDc1MzUw/prince-george-gettyimages-612086726_1500jpg.jpg",
  "born": "2013",
  "location": "London, England",
  "children": [
    {
      "name": "William Windsor",
      "born": "1982",
      "location": "London, England",
      "img": "https://pyxis.nymag.com/v1/imgs/a4b/f12/8b6877078fd0ffc75bc7a33139c33e2dee-prince-william.rsquare.w1200.jpg",
      "children": [
        {
          "name": "Charles Windsor",
          "born": "1948",
          "location": "London, England",
          "img": "https://pyxis.nymag.com/v1/imgs/261/be2/006a4e37e7aa51430a2aeb1e2b89c2cd03-28-prince-charles.rsquare.w700.jpg",
          "children": [
            {
              "name": "Philip Mountbatten",
              "born": "1921",
              "location": "London, England",
              "img": "https://pyxis.nymag.com/v1/imgs/f4d/729/e818e6dc252fb659b0ae70d34615a4608b-12-prince-phillip.rsquare.w700.jpg"
            },
            {
              "name": "Elizabeth Windsor",
              "born": "1926",
              "location": "London, England",
              "img": "https://s.yimg.com/ny/api/res/1.2/24el4r3oGWD4ohX1PAKnZw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0yMDAw/https://s.yimg.com/uu/api/res/1.2/NbZMowOPBH3P2cVfP3ES_A--~B/aD0yMDEzO3c9MjAxMzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/popsugar_celebrity_142/94c63c7450682c44bfed616767a88bfe"
            }
          ]
        },
        {
          "name": "Diana Spencer",
          "born": "1961 d. 1997",
          "location": "Northampton, England",
          "img": "https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTQzMzAxMjk3OTQ3Mjg5MTYw%2Fdiana_gettyimages-515185764jpg.jpg",
          "children": [
            {
              "name": "John Spencer",
              "born": "1924 d. 1992",
              "location": "Northampton, England",
              "img": "https://static.wikia.nocookie.net/goodwingenealogy/images/a/af/John_Spencer%2C_8th_Earl_Spencer.jpg/revision/latest/smart/width/200/height/200?cb=20160312191408"
            },
            {
              "name": "Frances Kydd",
              "born": "1936 d. 2004",
              "location": "Seil, Scotland",
              "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_NerEh7W2ApobTDcOaq4et3XUtWUevyDBw&usqp=CAU"
            }
          ]
        }
      ]
    },
    {
      "name": "Catherine Middleton",
      "born": "1982",
      "location": "London, England",
      "img": "https://media1.popsugar-assets.com/files/thumbor/8KQSCcmrdAW4XBjSPRYDmrWXg6I/412x105:1902x1595/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/955/n/1922398/21c22eb75d7032f90a7ae7.74501845_/i/Kate-Middleton.jpg",
      "children": [
        {
          "name": "Michael Middleton",
          "born": "1949",
          "location": "London, England",
          "img": "https://knownetworth.com/uploads/thumb/Michael-Middleton-415-415.jpeg",
          "children": [
            {
              "name": "Peter Middleton",
              "born": "1920 d. 2012",
              "location": "Vernham Dean, England",
              "img": "http://photos.geni.com/p13/e1/53/99/2b/5344483bcede2e03/wad86seb_medium.jpg"
            },
            {
              "name": "Valerie Middleton",
              "born": "1924 d. 2006",
              "location": "Hampshire, England",
              "img": "https://www.usmagazine.com/wp-content/uploads/1403107936_kate-middleton-zoom.jpg?w=500&h=506&crop=1&quality=86&strip=all"
            }
          ]
        },
        {
          "name": "Carole Middleton",
          "born": "1955",
          "location": "London, England",
          "img": "https://knownetworth.com/uploads/thumb/carole-middleton-415-415.jpeg",
          "children": [
            {
              "name": "Ronald Goldsmith",
              "born": "1931 d. 2003",
              "location": "Berkshire, England",
              "img": "https://gw.geneanet.org/public/img/media/deposits/3e/da/22916014/medium.jpg?t=1593589471"
            },
            {
              "name": "Dorothy Goldsmith",
              "born": "1936 d. 2006",
              "location": "Berkshire, England",
              "img": "http://photos.geni.com/p13/85/cb/10/1e/5344483bcece6a14/guz64tid_medium.jpg"
            }
          ]
        },
      ]
    }
  ]
};
root = treeData;
root.x0 = height / 2;
root.y0 = 0;

function update(source) {

  // Compute new tree layout
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update nodes
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter new nodes at parent's previous position
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click)
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

 // Add image pattern to svg
  nodeEnter
    .append("defs")
    .append("pattern")
    .attr("id", function(d){
      return "image"+ d.name.replace(" ", "-");
    })
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
    .attr("width", 1)
    .attr("height", 1)
    .attr("preserveAspectRatio", "none")
    .attr("xlink:href", function(d){
      return d.img;
    });

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .attr("fill",function(d){
      return "url(#image"+ d.name.replace(" ", "-") + ")"
    });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -45 : 45; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to new position
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 35)
      .attr("fill",function(d){
      return "url(#image"+ d.name.replace(" ", "-") + ")"
    });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to parent's new position
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter new links at parent's previous position
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to parent's new position
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Keep old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

function mouseover(d) {
    d3.select(this).append("text")
        .attr("class", "hover")
        .attr("x", function(d) { return d.children || d._children ? -45 : 45; })
        .attr("dy", "1.65em")
        .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
        .text("b. " + d.born + " " + d.location)
        .style("fill", "#808080");
}

function mouseout(d) {
    d3.select(this).select("text.hover").remove();
}

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

root.children.forEach(collapse);
update(root);

d3.select(self.frameElement).style("height", "800px");
