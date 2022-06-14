window.onload = startup;
function startup() {
  var btnHello = document.getElementById("btnHello");
  var btnBye = document.getElementById("btnBye");
  btnHello.addEventListener("click", msgHello) 
  btnBye.addEventListener("click", msgBye)
  
}

function msgHello() {

alert("Hi, you!");

}

function msgBye() {
  alert('Get out of my sight plebeian!');
}