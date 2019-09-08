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

var host = "http://localhost:8080/"

function getInventoryData() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", host.concat("inventory"), false); // false for synchronous request
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

function getRecordData() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", host.concat("inventory"), false); // false for synchronous request
    xmlHttp.send(null);
    console.log(xmlHttp.responseText)
    return xmlHttp.responseText;
}

function onClickInventory() {
    var dataBody = document.getElementById("data-body");
    addDataToTbody(dataBody, getInventoryData());
}

function loadTable(name) {
    $('#current-table').innerHTML = "";
    $('#current-table').load(name.concat(".html"));
}

function clearRows() {
    var dataBody = document.getElementById("data-body");
    dataBody.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function() {
    loadTable("inventory_table")
});