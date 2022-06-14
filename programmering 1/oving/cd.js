

window.onload = function (){


var felt = document.getElementById("container");
 felt.innerHTML = sjakkBrett.join("</br>");

}

var blackSquare = "#";
var whiteSquare = "_";

var antRuter = 8;

var sjakkBrett = [];

var rad = [];
var rad2 = [];

for ( var i = 0; i < antRuter; i++ ) {

    if(i % 2 == 0 ){

    rad.push(blackSquare);
    rad2.push(whiteSquare);

    }else{

        rad.push(whiteSquare);
        rad2.push(blackSquare);


    }
  
}

  for (var j = 0; j < antRuter/2; j++){

    sjakkBrett.push(rad.join(""));
    sjakkBrett.push(rad2.join(""));

    
  }

  console.log(rad);
  console.log(rad2);
  console.log(sjakkBrett);


