//Start a function with let filHenter that find the input field and tell something will happend in the next function.
window.onload = function (){
  let filHenter = document.getElementById("file");
  filHenter.addEventListener("change", hentFiler)
}

function hentFiler(event){
  //Tell it to get the file i choose.
  let file = event.target.files[0];
  let filLeser = new FileReader();

  //Read the file as text and call upon a anonymous function
  filLeser.readAsText(file);
  filLeser.onload = function (){
      //splits on a new line
      const linjer = filLeser.result.split("\n");
      
      //loop to iterate through the lines
      for (var i = 0; i < linjer.length; i++){
       
          //slice the lines up in elements
          linjer[i] = linjer[i].split(",")   
      }
      
      // Calling upon the table
      var tabell = document.getElementById("table");
      
     //Loop through x and y to create rows and table cells both horizontal and vertical.
      for(var x = 0; x < linjer.length; x++){
        var tr = document.createElement("tr");
        tr.innerHTML = x + 1;
        for(var y = 0; y < linjer[x].length; y++){

          var td = document.createElement("td");
          td.innerHTML =linjer[x][y];
          tr.appendChild(td);
        }
        tabell.appendChild(tr);

      }
      console.table(linjer);
       main(linjer);
 
  }
 
}
//Bringing the array further into another function and printing out the statistics into table cells
function main(array){
 
 let print1 = document.getElementById("countLocation")
 let print2 = document.getElementById("countTrans")
 let print3 = document.getElementById("countDays")
 let print4 = document.getElementById("printAmount")
 let print5 = document.getElementById("printMax")
 let print6 = document.getElementById("printMin")
 

  print1.innerHTML = (totLocations(array, 2))
  print2.innerHTML = (totTrans(array, 1)) 
  print3.innerHTML = (totDays(array, 0))
  print4.innerHTML = (averageAmount(array, 3)).toFixed(2) + " " + "kr";
  print5.innerHTML = (maxAmount(array, 3)) + " " + "kr";
  print6.innerHTML = (minAmount(array, 3)) + " " + "kr";
 
 
  
}

//Find total different locations
function totLocations(array, field){	
  let locations = [];
  for (let i = 0; i < array.length; i++)
  if (locations.indexOf(array[i][field]) === -1 && array[i][field] !== '')
  locations.push(array[i][field]);
  return locations.length;
 }

//Find total different transaction types
function totTrans(array, field){	
  let totTypes = [];
  for (let i = 0; i < array.length; i++)
  if (totTypes.indexOf(array[i][field]) === -1 && array[i][field] !== '')
  totTypes.push(array[i][field]);
  return totTypes.length;
 }


//Find out many days the plan took
 function totDays(array, field) {

  let dates = new Array();

  for (let i = 0; i < array.length; i++) {
      dates.push(array[i][field]);
  }

  first = new Date(dates[field]);
  last = new Date(dates[dates.length - 1]);

  //calculates the difference in milliseconds
  differenceTime = last.getTime() - first.getTime();

  //calculates the difference in days by dividing with number of milliseconds in a day 
  differenceDays = Math.round(differenceTime / (1000 * 3600 * 24));

  return differenceDays;

}



//Get the total and average amount by dividing total amount on the length of the lines.
function averageAmount(array, field){
  let total = 0;

  for(var i = 0; i < array.length; i++){
      total += parseFloat(array[i][field]);
  }

  document.getElementById("printTotal").innerHTML = total.toFixed(0) + " " + "kr";
  let elementAmount = array.length;
  return total/elementAmount 
}

//Find the highest amount. 
function maxAmount(array, field){	
  let max = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i][field] > max){
          max = parseFloat(array[i][field]);
          }
      }
  return max
  }

//Find the lowest amount.
function minAmount(array, field){	
  let min = Infinity;
  for(let i = 0; i < array.length; i++){
      if(array[i][field] < min){
          min = parseFloat(array[i][field]);
          }
      }
  return min
  }
