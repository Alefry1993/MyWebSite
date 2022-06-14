window.onload = startup;


function startup() {

document.getElementById("calc").onclick = total;

}


function total() {

var tall1 = document.getElementById("tall1").value; 
var tall2 = document.getElementById("tall2").value;
var sum = parseInt(tall1) + parseInt(tall2);
var change = document.getElementById("utskrift2");
var utskrift = document.getElementById("utskrift");


if (sum%2 === 0){
utskrift.innerHTML = "Your result is:" + " " + sum;
utskrift2.innerHTML = "the number" + " " + sum + " " + "is even";
console.log( "Your result is:" + " " + sum + " " + "and " +  "the number" + " " + sum + " " + "is even");


}
else{
utskrift.innerHTML = "Your result is:" + " " + sum;
utskrift2.innerHTML = "The number" + " " + sum +" " + "is odd";
console.log( "Your result is:" + " " + sum + " " + "and " +  "the number" + " " + sum + " " + "is odd");


}
}
