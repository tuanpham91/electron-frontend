function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
    data.forEach((d, i) => {
        var tr = nl.insertRow(i);
        Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
            var cell = tr.insertCell(j);
            cell.innerHTML = d[k]; // Assign object values to cells   
        });
        nl.appendChild(tr);
    })
}
var lakeData = [{
    "Id": "1959-01",
    "Name": "DrugA",
    "Quantity": 10,
    "ExpirationDate": "Today"
}, {
    "Id": "1959-01",
    "Name": "DrugB",
    "Quantity": 10,
    "ExpirationDate": "Today"
}];
var dataTbody = document.querySelector("#dataTable body");

addDataToTbody(dataTbody, lakeData);