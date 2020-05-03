$(document).ready(function() {

  

  
  var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
  setInterval(update, 1000);
 

 
  $(".savebtn").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });


 
  console.log(localStorage.getItem("hour8"));
  var test = localStorage.getItem("hour8");
  


 
  $("#to-do8").val(localStorage.getItem("hour8"));
  $("#to-do9").val(localStorage.getItem("hour9"));
  $("#to-do10").val(localStorage.getItem("hour10"));
  $("#to-do11").val(localStorage.getItem("hour11"));
  $("#to-do12").val(localStorage.getItem("hour12"));
  $("#to-do13").val(localStorage.getItem("hour13"));
  $("#to-do14").val(localStorage.getItem("hour14"));
  $("#to-do15").val(localStorage.getItem("hour15"));
  $("#to-do16").val(localStorage.getItem("hour16"));
  $("#to-do17").val(localStorage.getItem("hour17"));
  $("#to-do18").val(localStorage.getItem("hour18"));


  
  if ((moment().format("H")) > 8 ) {
    $(hour8).css("background-color", "gray");
  } else if ((moment().format("H")) < 8) {
    $(hour8).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 8) {
    $(hour8).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 9) {
    $(hour9).css("background-color", "gray");
  } else if ((moment().format("H")) < 9) {
    $(hour9).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 9) {
    $(hour9).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 10) {
    $(hour10).css("background-color", "gray");
  } else if ((moment().format("H")) < 10) {
    $(hour10).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 10) {
    $(hour10).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 11) {
    $(hour11).css("background-color", "gray");
  } else if ((moment().format("H")) < 11) {
    $(hour11).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 11) {
    $(hour11).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 12) {
    $(hour12).css("background-color", "gray");
  } else if ((moment().format("H")) < 12) {
    $(hour12).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 12) {
    $(hour12).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 13) {
    $(hour13).css("background-color", "gray");
  } else if ((moment().format("H")) < 13) {
    $(hour13).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 13) {
    $(hour13).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 14) {
    $(hour14).css("background-color", "gray");
  } else if ((moment().format("H")) < 14) {
    $(hour14).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 14) {
    $(hour14).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 15) {
    $(hour15).css("background-color", "gray");
  } else if ((moment().format("H")) < 15) {
    $(hour15).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 15) {
    $(hour15).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 16) {
    $(hour16).css("background-color", "gray");
  } else if ((moment().format("H")) < 16) {
    $(hour16).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 16) {
    $(hour16).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 17) {
    $(hour17).css("background-color", "gray");
  } else if ((moment().format("H")) < 17) {
    $(hour17).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 17) {
    $(hour17).css("background-color", "red");
  } else {
    alert('Error');
  }


  if ((moment().format("H")) > 18) {
    $(hour18).css("background-color", "gray");
  } else if ((moment().format("H")) < 18) {
    $(hour18).css("background-color", "rgb(146, 180, 245)");
  } else if ((moment().format("H")) == 18) {
    $(hour18).css("background-color", "red");
  } else {
    alert('Error');
  }

})