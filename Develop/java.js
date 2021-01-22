//variables//
var now = moment();
var dateFormat = "MM/DD/YYYY";
var convertedDate = moment(now, dateFormat);
    console.log(convertedDate.format("MM/DD/YY hh:mm"));
    console.log(convertedDate.format("MM - Do - YY"));
var newDate = moment();
    console.log(newDate.diff(convertedDate, "days"));

//function for color coding//


//function to display date//
function displayCurrentDate() {
  var currentDate = moment().format("dddd, MMMM, YYYY");
  $("#currentDay").text(currentDate);
}
displayCurrentDate();

//local storage//
$(".saveBtn").on("click", function() {
    var entry = $(this).siblings(".To-do").val()
    var time = $(this).siblings().attr("data-time")
  localStorage.setItem(time, entry);
  localStorage.getItem(".To-do", "data-time");
});
