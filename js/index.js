// displays date
var today = moment().format('dddd, MMM Do YYYY, h:mm a');
$("#currentDay").html(today);


// changes CSS styling depending on time
    //check time, if in the past, present or future, remove or add class
    function currentTime() {
      var rightNow = moment().hour();
console.log(rightNow)
      $(".time-block").each(function(index) {
          console.log(index);

          var blockTime = parseInt($(this).attr("id").split("hour")[1]);
          console.log(blockTime)

          // To check the time and add the classes to change the block colour 
            if (blockTime < rightNow) {
                $(this).addClass("past");
            }
            else if (blockTime === rightNow) {
              $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).removeClass("future");
            }
        })
      }
      currentTime();


//save inputed data to local storage
$(".saveBtn").on("click", function(){
    var save = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
  console.log(time)
    localStorage.setItem(time, save)
})


//load local storage data saved 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


// //set time blocks to past present or future class
// function checkTime() {
//   var rightNow = moment().hour();
// // loop through time blocks
//   $(".description .hour").each(function () {
//       var block = parseInt($(this).attr("id").split("hour")[12]);
// console.log


//       //check if current time is past present or future to blockHour
//       if (block < rightNow) {
//           $(this).addClass("past").removeClass("present future");
//       }
//       else if (block === rightNow) {
//           $(this).addClass("present").removeClass("past future");
//       }
//       else {
//           $(this).addClass("future").removeClass("past present");
//       }
//   })
// }
// checkTime();