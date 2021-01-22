//variables//


//function to display date//
function displayCurrentDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(currentDate);
  }
  displayCurrentDate();


//local storage//
