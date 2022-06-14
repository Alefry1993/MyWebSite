window.onload = xor;


function xor(a,b) { 

return( a || b) && !(a && b );

}

console.log(xor(true,true))
console.log(xor(true,false))
console.log(xor(false,true))
console.log(xor(false,false))

