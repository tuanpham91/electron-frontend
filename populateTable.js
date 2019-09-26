function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
    var parsedData = JSON.parse(data)
    parsedData.forEach((o, i) => {
        var tr = nl.insertRow(i);
        var ind = 0;
        for (var att in o) {
            var cell = tr.insertCell(ind);
            cell.innerHTML = o[att]; // Assign object values to cells  
            ind++;
        }
        nl.appendChild(tr);
    })
}
var currentTable = "inventory"
var host = "http://localhost:8080/"

function getData(name) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", host.concat(name), false); // false for synchronous request
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

function onClickSearch() {
    var dataBody = document.getElementById("data-body");
    addDataToTbody(dataBody, getData(currentTable));
}

function loadTable(name) {
    currentTable = name;
    $('#current-table').innerHTML = "";
    $('#current-table').load(name.concat("_table.html"));
}

function clearRows() {
    var dataBody = document.getElementById("data-body");
    dataBody.innerHTML = "";
}

function readInputValuesFromFields() {
    var getInputFields = document.getElementsByClassName("input-text");
    var filterTuples = getInputFields.map(x => {
        return [x.getAttribute("name"), x.value];
    })
    return filterTuples;
}

/* Not sure why its here
document.addEventListener("DOMContentLoaded", function() {
    loadTable(currentTable)
});

*/