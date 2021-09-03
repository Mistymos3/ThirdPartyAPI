//set current day moment.js
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

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
//     var currentTime = moment().hour();

// // var checkTime = function () {
// //     //get current hour
// //     var currentHour = moment().hour();

// //     $("#currentDay").text();
// // console.log(currentHour);

// // loop over time blocks
//     $(".time-block").each(function () {
//         var block = parseInt($(this).attr("id").split("hour")[1]);

//         //check if current time is past present or future to blockHour
//         if (block < currentTime) {
//             $(this).addClass("past").removeClass("present future");
//         }
//         else if (block === currentTime) {
//             $(this).addClass("present").removeClass("past future");
            
//         }
//         else {
//             $(this).addClass("future").removeClass("past present");
            
//         }
//     })
//     checkTime();
// }