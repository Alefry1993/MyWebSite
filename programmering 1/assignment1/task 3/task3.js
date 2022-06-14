window.onload = startup;


function startup(){
 
   document.getElementById("btn1").onclick = nummer1;
   document.getElementById("btn2").onclick = nummer2;
   document.getElementById("btn3").onclick = nummer3;
   document.getElementById("btn4").onclick = nummer4;
   } 
 

function nummer1(){

var tall1 = prompt("Please enter your first number");
var tall2 = prompt("Please enter your second number");
var sum = parseInt(tall1) + parseInt(tall2); 

document.getElementById("utskrift1").innerHTML = "Your result is:" +  " " + tall1 + " " + "+" + " " + tall2 + " " + "=" + " " + sum;
console.log("Your result is:" +  " " + tall1 + " " + "+" + " " + tall2 + " " + "=" + " " + sum);
}

function nummer2(){

   var tall3 = prompt("Please enter your first number");
   var tall4 = prompt("Please enter your second number");
   var sum = parseInt(tall3) - parseInt(tall4);
   
   document.getElementById("utskrift2").innerHTML = "Your result is:" +  " " + tall3 + " " + "-" + " " + tall4 + " " + "=" + " " + sum;
   console.log("Your result is:" +  " " + tall3 + " " + "-" + " " + tall4 + " " + "=" + " " + sum);
   }

   function nummer3(){

      var tall5 = prompt("Please enter your first number");
      var tall6 = prompt("Please enter your second number");
      var sum = parseInt(tall5) * parseInt(tall6);
      
      document.getElementById("utskrift3").innerHTML = "Your number is:" +  " " + tall5 + " " + "*" + " " + tall6 + " " + "=" + " " + sum;
      console.log("Your result is:" +  " " + tall5 + " " + "*" + " " + tall6 + " " + "=" + " " + sum);
      }

      function nummer4(){

         var tall7 = prompt("Please enter your first number");
         var tall8 = prompt("Please enter your second number");
         var sum = parseInt(tall7) / parseInt(tall8);
         
         document.getElementById("utskrift4").innerHTML = "Your number is:" +  " " + tall7 + " " + "/" + " " + tall8 + " " + "=" + " " + sum;
         console.log("Your result is:" +  " " + tall7 + " " + "/" + " " + tall8 + " " + "=" + " " + sum);
         }
