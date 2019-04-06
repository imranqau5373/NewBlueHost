function getRatesList(){
    fetch('http://62.138.16.114:3000/rates/getRates', {
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
    })
    .then(function(response) {
        debugger;
        return response.json();
    })
    .then(function(myJson) {
        debugger;
        console.log(myJson);
        drawTable(myJson.rates)
    });
}


function drawRow(rowData) {
    var row = $("<tr />")
    $("#callingRatesTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it

    row.append($("<td>" + rowData[0] + "</td>"));
    row.append($("<td>" + rowData[1] + "</td>"));
    row.append($("<td>" + rowData[2] + "</td>"));
    row.append($("<td>" + rowData[3] + "</td>"));


}

function drawTable(rates) {
    for (var i = 1; i < rates.length; i++) {
        drawRow(rates[i]);
    }
    $('<script/>',{type:'text/javascript', src:'js/jquery.dataTables.min.js'}).appendTo('head');
    $('<script/>',{type:'text/javascript', src:'js/dataTables.bootstrap.min.js'}).appendTo('head');
    $('<script/>',{type:'text/javascript', src:'js/vpt-plugin/vpt.js'}).appendTo('head');   
}
