var currentTable = "inventory"
var host = "http://localhost:8080/"


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
        tr.addEventListener("dblclick", function() {
            alert("Changed");
        });
        nl.appendChild(tr);
    })
}

function getData(name) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", host.concat(name), false); // false for synchronous request
    var filters = JSON.stringify(readInputValuesFromFields());
    console.log(filters);
    // javascript does not fucking sends body for GET request it just fucking set it to null
    xmlHttp.send(filters.toString());
    return xmlHttp.responseText;
}

function onClickSearch() {
    clearRows()
    var dataBody = document.getElementById("data-body");
    var data = getData(currentTable)
    console.log(data)
    addDataToTbody(dataBody, data);
}

function loadTable(name) {
    currentTable = name;
    $('#current-table').innerHTML = "";
    $('#current-table').load(name.concat("_table.html"));
    $('#filter-widget').innerHTML = "";
    $('#filter-widget').load(name.concat("_filter.html"));
    $('#apply-widget').innerHTML = "";
    $('#apply-widget').load("inventory".concat("_modifier.html"));

}

function clearRows() {
    var dataBody = document.getElementById("data-body");
    dataBody.innerHTML = "";
}

function readInputValuesFromFields() {
    var getInputFields = document.getElementsByClassName("inputText");
    // Convert to Array
    var inputFieldArray = Array.from(getInputFields)
    var filterTuples = inputFieldArray.map((x) => {
            return [x.getAttribute("name"), x.value];
        })
        // Only returns values which is not empty or blank space
    var re = new RegExp("^\s*$")
    return filterTuples.filter(x => !re.test(x[1]));
}


/* Not sure why its here
document.addEventListener("DOMContentLoaded", function() {
    loadTable(currentTable)
});

*/