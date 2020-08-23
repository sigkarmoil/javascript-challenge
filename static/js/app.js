// from data.js
var tableData = data;

// YOUR CODE HERE!

// Run data line by line. If the date matches, push to list.
//If not, move to the next line.


// Try to print out all entries to the table
var tbody = d3.select("tbody");


// get the date filter. Use get.event.target

//Select the filter button
var button = d3.select("button");

//Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  
  
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  //Clearing entries from inputValue
  d3.selectAll("tr").remove()

  // Printing entries into table
  tableData.forEach((entry) => {

    // Iterate through each key and value
    var row = tbody.append("tr")
    Object.entries(entry).forEach(([key, value]) => {
        if (entry.datetime == inputValue) {
            var cell = row.append("td");
             cell.text(value);
          }
        else if (entry.datetime != inputValue) {
            return;
        }
 
     });
  });
}
