//variables//
var now = moment();
var dateFormat = "MM/DD/YYYY";
var convertedDate = moment(now, dateFormat);
    console.log(convertedDate.format("MM/DD/YY hh:mm"));
    console.log(convertedDate.format("MM - Do - YY"));
var newDate = moment();
    console.log(newDate.diff(convertedDate, "days"));


//function to display date//
function displayCurrentDate() {
  var currentDate = moment().format("dddd, MMMM, YYYY");
  $("#currentDay").text(currentDate);
}
displayCurrentDate();

//function for color coding//


//local storage//
$(".saveBtn").addEventListener("click", )
localStorage.setItem("lastname", "Smith");