//variables//
var now = moment();
var dateFormat = "MM/DD/YYYY";
var convertedDate = moment(now, dateFormat);
    //console.log(convertedDate.format("MM/DD/YY hh:mm"));
    //console.log(convertedDate.format("MM - Do - YY"));
var newDate = moment();
    //console.log(newDate.diff(convertedDate, "days"));

//function to display date//
function displayCurrentDate() {
  var currentDate = moment().format("dddd, MMMM, YYYY");
  $("#currentDay").text(currentDate);
}
displayCurrentDate();

//function for color coding//
function colors() {
  hour = now.hours(); 
  $(".time-block").each(function () {
      var thisHour = parseInt($(this).attr("id"));

      if (thisHour > hour) {
          $(this).addClass("future")
      }
      else if (thisHour === hour) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("past");
      }
  })
}

colors();

//local storage//
$(".saveBtn").on("click", function() {
  var time = $(this).parent().attr("id");
  var schedule = $(this).siblings(".To-do").val().trim();

  localStorage.setItem(time, schedule);
  console.log(time, schedule);
});