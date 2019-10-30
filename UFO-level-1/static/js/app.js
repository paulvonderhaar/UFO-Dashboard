// from data.js
var tableData = data;

// YOUR CODE HERE!
// On Load Display all information
var table = document.getElementById("ufo-table");
tableData.forEach((line) => {
    row = table.insertRow(-1);

var cell1 = row.insertCell(0);
cell1.innerHTML=line.datetime;

var cell2 = row.insertCell(1);
cell2.innerHTML = line.city;

var cell3 = row.insertCell(1);
cell3.innerHTML = line.state;

var cell4 = row.insertCell(1);
cell4.innerHTML = line.country;

var cell5 = row.insertCell(1);
cell5.innerHTML = line.shape;

var cell6 = row.insertCell(1);
cell6.innerHTML = line.durationMinutes;

var cell7 = row.insertCell(1);
cell7.innerHTML = line.comments;

});

function FilterTable(){
	var mydate = document.getElementById("datetime")
	console.log(mydate.value)
	document.getElementById("ufo-table").innerHTML = "";
	tableData.forEach((line) => {
		if(line.datetime == mydate.value){
			row = table.insertRow(-1);

			var cell1 = row.insertCell(0);
			cell1.innerHTML=line.datetime;

			var cell2 = row.insertCell(1);
			cell2.innerHTML = line.city;

			var cell3 = row.insertCell(1);
			cell3.innerHTML = line.state;

			var cell4 = row.insertCell(1);
			cell4.innerHTML = line.country;

			var cell5 = row.insertCell(1);
			cell5.innerHTML = line.shape;

			var cell6 = row.insertCell(1);
			cell6.innerHTML = line.durationMinutes;

			var cell7 = row.insertCell(1);
			cell7.innerHTML = line.comments;
					}

	
	})
}

