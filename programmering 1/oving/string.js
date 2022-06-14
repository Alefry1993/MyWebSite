var langString = "1,2,3,4,5,6,7,8\n8,7,6,5,4,3,2,1\n5,4,3,2,1,6,7,8"

var linjer = langString.split("\n")

console.log(linjer);

for(var i = 0; i < linjer.length; i++){
    linjer[i] = linjer[i].split(",");
}


console.log(linjer);