let circle = (r) => {

    if (Number.isNaN (r) || r < 0)
    return undefined


   return (Math.PI) * Math.pow(r , 2); 

   
}

console.log( circle(1) ); // 3.141592653589793
console.log( circle(8) ); // 201.06192982974676
console.log( circle("fifteen") ); // undefined
console.log( circle(-4) ); // undefined