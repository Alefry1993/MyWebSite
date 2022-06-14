window.onload = startup;



function startup(){
tall1 = 8;
tall2 = 80;
sum1 = tall1 + tall2;
 sum2 = tall2 - tall1;
sum3 = tall1 * tall2;
 sum4 = tall2 / tall1;
document.getElementById("btn1").onclick = nummer1;
document.getElementById("btn2").onclick = nummer2;
document.getElementById("btn3").onclick = nummer3;
document.getElementById("btn4").onclick = nummer4;
console.log("Your numbers are:" + " " + tall1 + " " + "and" + " " + tall2);
}




function nummer1(){

var tall1 = 8;
var tall2 = 80;
var sum1 = tall2 + tall1;
    
 console.log("Your result is:" +  " " + tall1 + " " + "+" + " " + tall2 + " " + "=" + " " + sum1);
 document.getElementById("utskrift").innerHTML = "Your result is: " +  tall2 + " " + "+" + " " + tall1 + " " + "=" + " " + sum1;
    }
    
    function nummer2(){
    
        var tall3 = 8;
        var tall4 = 80;
        var sum2 = tall4 - tall3;
       console.log("Your result is:" +  " " + tall4 + " " + "-" + " " + tall3 + " " + "=" + " " + sum2);
       document.getElementById("utskrift").innerHTML = "Your result is: " +  tall4 + " " + "-" + " " + tall3 + " " + "=" + " " + sum2;
       }
    
       function nummer3(){
    
        var tall5 = 8;
        var tall6 = 80;
        var sum2 = tall6 * tall5;
          console.log("Your result is:" +  " " + tall6 + " " + "*" + " " + tall5 + " " + "=" + " " + sum3);
          document.getElementById("utskrift").innerHTML = "Your result is: " +  tall6 + " " + "*" + " " + tall5 + " " + "=" + " " + sum3;
          }
    
          function nummer4(){
    
            var tall7 = 8;
            var tall8 = 80;
            var sum4 = tall8 / tall7;
             console.log("Your result is:" +  " " + tall8 + " " + "/" + " " + tall7 + " " + "=" + " " + sum4);
             document.getElementById("utskrift").innerHTML = "Your result is: " +  tall8 + " " + "/" + " " + tall7 + " " + "=" + " " + sum4;
             }