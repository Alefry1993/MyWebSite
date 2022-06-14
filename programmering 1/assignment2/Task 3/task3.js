window.onload = circle; /*Window starts opening function circle*/

function circle(r){ /*Function circle and what it do*/

var A  = Math.PI * Math.pow(r,2); /*Variable A is calculating areal of a circle function*/

if(r < 0) { /* If the calculation is lower than 0 like -4 and string it will return back as undefined*/

  return undefined;

}else if ( r > 0){ /*Else if its higher than 0 it will return the value of calculating the number with variable A*/
  
  return A;
}
}

console.log( circle(1).toFixed(2)); // 3.141592653589793
console.log( circle(8).toFixed(2)); // 201.06192982974676
console.log( circle("fifteen")); // undefined
console.log( circle(-4)); // undefined
