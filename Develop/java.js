//variables//
var now = moment();
var dateFormat = "MM/DD/YYYY";
var convertedDate = moment(now, dateFormat);
    //console.log(convertedDate.format("MM/DD/YY hh:mm"));
    //console.log(convertedDate.format("MM - Do - YY"));
var newDate = moment();
    //console.log(newDate.diff(convertedDate, "days"));
    var hour9Am = $("#9");
    var hour10Am = $("#10");
    var hour11Am = $("#11");
    var hour12Pm = $("#12");
    var hour1Pm = $("#13");
    var hour2Pm = $("#14");
    var hour3Pm = $("#15");
    var hour4Pm = $("#16");
    var hour5Pm = $("#17");


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

});