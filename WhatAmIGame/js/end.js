var sLS = localStorage.getItem("scoreLS"); //get variable from local storage
var s = sLS;

//console.log("hello");
document.getElementById('finalScore').innerHTML = "Your Final Score is: " + s +"/30";
