window.onload = xor; /*Start up with the xor function*/

function xor(a,b) { 
    return( a || b) && !(a && b ); /* Using the xor operator to return out the equation to see result if the equation returns in console as true or false.*/ 
}

/*Logging to see what will be true and what will be false*/
console.log(xor(true,true))
console.log(xor(true,false))
console.log(xor(false,true))
console.log(xor(false,false))

/* Second operator that is gonna do the same output, but has a different input than the first equation.*/
function xor2(c,d) {
  return (c && !d ) || (!c && d);
  }

/*Logging to see what will be true and what will be false*/
console.log(xor2(true ,true))
console.log(xor2(true, false))
console.log(xor2(false, true))
console.log(xor2(false, false));


