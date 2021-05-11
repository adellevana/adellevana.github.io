function createTable(tableData) {

  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");
  tableData.forEach(function(rowData) {

    var image = [
      ["https://knownetworth.com/uploads/thumb/carole-middleton-415-415.jpeg"],
      ["https://media1.popsugar-assets.com/files/thumbor/8KQSCcmrdAW4XBjSPRYDmrWXg6I/412x105:1902x1595/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/955/n/1922398/21c22eb75d7032f90a7ae7.74501845_/i/Kate-Middleton.jpg"],
      ["https://pyxis.nymag.com/v1/imgs/261/be2/006a4e37e7aa51430a2aeb1e2b89c2cd03-28-prince-charles.rsquare.w700.jpg"],
      ["https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTQzMzAxMjk3OTQ3Mjg5MTYw%2Fdiana_gettyimages-515185764jpg.jpg"],
      ["http://photos.geni.com/p13/85/cb/10/1e/5344483bcece6a14/guz64tid_medium.jpg"],
      ["https://s.yimg.com/ny/api/res/1.2/24el4r3oGWD4ohX1PAKnZw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0yMDAw/https://s.yimg.com/uu/api/res/1.2/NbZMowOPBH3P2cVfP3ES_A--~B/aD0yMDEzO3c9MjAxMzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/popsugar_celebrity_142/94c63c7450682c44bfed616767a88bfe"],
      ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_NerEh7W2ApobTDcOaq4et3XUtWUevyDBw&usqp=CAU"],
      ["https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMzA3MTY2MDI2NDc1MzUw/prince-george-gettyimages-612086726_1500jpg.jpg"],
      ["https://static.wikia.nocookie.net/goodwingenealogy/images/a/af/John_Spencer%2C_8th_Earl_Spencer.jpg/revision/latest/smart/width/200/height/200?cb=20160312191408"],
      ["https://knownetworth.com/uploads/thumb/Michael-Middleton-415-415.jpeg"],
      ["http://photos.geni.com/p13/e1/53/99/2b/5344483bcede2e03/wad86seb_medium.jpg"],
      ["https://pyxis.nymag.com/v1/imgs/f4d/729/e818e6dc252fb659b0ae70d34615a4608b-12-prince-phillip.rsquare.w700.jpg"],
      ["https://gw.geneanet.org/public/img/media/deposits/3e/da/22916014/medium.jpg?t=1593589471"],
      ["https://www.usmagazine.com/wp-content/uploads/1403107936_kate-middleton-zoom.jpg?w=500&h=506&crop=1&quality=86&strip=all"],
      ["https://pyxis.nymag.com/v1/imgs/a4b/f12/8b6877078fd0ffc75bc7a33139c33e2dee-prince-william.rsquare.w1200.jpg"]
    ];

    var row = document.createElement("tr");
    row.onmouseover = function(){
      document.getElementById("slide").innerHTML = "<img src='" + image[rowData[0]-1]+ "'><br><br>" + rowData[1] + ", " + rowData[2] + ", " + rowData[3];
    }

    row.onmouseout = function(){
      document.getElementById("slide").innerHTML = "";
    }

    rowData.forEach(function(cellData) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable([
  ["1","Carole Middleton", "1955", "London, England"],
  ["2","Catherine Middleton", "1982", "London, England"],
  ["3","Charles Windsor", "1948", "London, England"],
  ["4","Diana Spencer", "1961-1997", "Northampton, England"],
  ["5","Dorothy Goldsmith", "1936-2006", "Berkshire, England"],
  ["6","Elizabeth Windsor", "1926", "London, England"],
  ["7","Frances Kydd", "1936-2004", "Seil, Scotland"],
  ["8","George Windsor", "2013", "London, England"],
  ["9","John Spencer", "1924-1992", "Northampton, England"],
  ["10","Michael Middleton", "1949", "London, England"],
  ["11","Peter Middleton", "1920-2012", "Vernham Dean, England"],
  ["12","Philip Mountbatten", "1921", "London, England"],
  ["13","Ronald Goldsmith", "1931-2003", "Berkshire, England"],
  ["14","Valerie Middleton", "1924-2006", "Hampshire, England"],
  ["15","William Windsor", "1982", "London, England"],
]);
