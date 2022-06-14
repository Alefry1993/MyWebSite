window.onload = startUp;

//Start a function with let filHenter that find the input field 
//and tell something will happend in the next function.
//Also adding an eventListener to call on the selector for choosing each location
function startUp (){
  let filHenter = document.getElementById("file");
  let locationSelect = document.getElementById("mySelect");

  filHenter.addEventListener("change", hentFiler)
  locationSelect.addEventListener("change", visLocation)

}
//Create function to get the file. Where creating a new fileReader to read the file that comes inn and goes to it. 
function hentFiler(event){
  //Tell it to get the file i choose.
  let file = event.target.files[0];
  let filLeser = new FileReader();

  //Read the file as text and call upon a anonymous function
  filLeser.readAsText(file);
  filLeser.onload = lagreFil;
 } 
//Stores the content as string. Split and loop through to provide a new array when ",".
//Linjer is then a 2D array.

  function lagreFil (event2){

      //Store content as string
      let string = event2.target.result;

      //splits on a new line
      linjer = string.split("\n");
      
      //loop to iterate through the lines
      for (let i = 0; i < linjer.length; i++){
       
          //slice the lines up in elements and makes new array by "," tag.
          linjer[i] = linjer[i].split(",")   
      }
//Takes array linjer further into other functions down in the code,
   linjer = linjer;

   statsLocation(linjer);
   locationPush(linjer);
   drawStatistics(linjer);
  
 
}



//loops through the array and adds each amount to the total amount

function total(linjer, field) {

  let total = 0;

  for (i = 0; i < linjer.length; i++) {
      total += parseFloat(linjer[i][field]);
  }

  total = total.toFixed(0);



  return total;
}

//finds the total amount by looping through and adding each amount to the total amount. Then divides it by the array-length to find average//

function average(linjer, field) {

  let total = 0;

  for (i = 0; i < linjer.length; i++) {
      total += parseFloat(linjer[i][field]);
  }

  avg = (total / linjer.length).toFixed(0);

  return avg;
}

//pushes loops through the 2D array rows and pushes the amounts into a new array. This will get the opertunity to calculate the max amount

function max(linjer, field) {

  let transaction = new Array();
  let max;

  for (let i = 0; i < linjer.length; i++) {
      transaction.push(linjer[i][field]);
  }

  max = Math.max(...transaction);

  return max;


}

//pushes loops through the 2D array same as in the max function instead we find the minimum amount by using math.min

function min(linjer, field) {

  let transaction = new Array();
  let min;

  for (let i = 0; i < linjer.length; i++) {
      transaction.push(linjer[i][field]);
  }

  min = Math.min(...transaction);

  return min;

}













//the following functions return stats calculated on non-multidimensional arrays// nessesary because the initial functions calculates 
// the stats based on multidimensional arrays//


function max1(linjer) {
  var max = Math.max(...linjer);

  return max
}

function min1(linjer) {
  let min = Math.min(...linjer);

  return min;
}

function avg1(linjer) {
  let total = 0;
  let avg;

  for (i = 0; i < linjer.length; i++) {
      total += parseFloat(linjer[i]);
  }
  avg = (total / linjer.length).toFixed(0);
  return avg;
}

function total1(linjer) {
  let total = 0;

  for (i = 0; i < linjer.length; i++) {
      total += parseFloat(linjer[i]);
  }

  total = total.toFixed(0);

  return total;
}

//Push each location into a new array and creates if tests that if each locations is chosen it pushes that array through.

function locationPush(linjer) {

  midHaldenLinje = new Array();
  haldenLinje = new Array();

  midOsloLinje = new Array();
  osloLinje = new Array();

  midFrkstadLinje = new Array();
  frkstadLinje = new Array();

  midStavLinje = new Array();
  stavLinje = new Array();



  for (let i = 0; i < linjer.length; i++) {
      for (let j = 0; j < linjer[i].length; j++) {

          if (linjer[i][2] === "Halden")
              midHaldenLinje.push(linjer[i][j]);

          else if (linjer[i][2] === "Oslo")
              midOsloLinje.push(linjer[i][j]);

          else if (linjer[i][2] === "Fredrikstad")
              midFrkstadLinje.push(linjer[i][j]);

          else if (linjer[i][2] === "Stavanger")
              midStavLinje.push(linjer[i][j]);

      }



  }

  //sets new arrays to be 2D arrays, because the arrayTo2D returns a 2d array
  //this is done in order to run the original table-making functions, because these take 2D arrays as arguments


  haldenLinje = arrayTo2D(midHaldenLinje, 4);
  osloLinje = arrayTo2D(midOsloLinje, 4);
  frkstadLinje = arrayTo2D(midFrkstadLinje, 4);
  stavLinje = arrayTo2D(midStavLinje, 4);



}

//function checks wich location is selected and go to that calculation and choose it//

function visLocation() {

  let chosen = document.getElementById("mySelect").value;

  if (chosen === "All") {

      dataTable(linjer);
      statsTable(chosen)

  } else if (chosen === "Halden") {

      dataTable(haldenLinje);
      statsTable(chosen)


  } else if (chosen === "Fredrikstad") {

      dataTable(frkstadLinje)
      statsTable(chosen)


  } else if (chosen === "Oslo") {
      dataTable(osloLinje)
      statsTable(chosen)

  } else if (chosen === "Stavanger") {
      dataTable(stavLinje)
      statsTable(chosen)

  }

drawStatistics();

}


//takes an array and a number as parameters, then returns a 2d array of the original array and splits it up in how many elements you want in each sub-array.

function arrayTo2D(linjer, nmb) {

  var result = []

  input = linjer.slice(0)
  while (linjer[0]) {
      result.push(linjer.splice(0, nmb))
  }
  return result
}


//Create the table for the array linjer.
function dataTable(linjer){

      // Calling upon the table
      let tabell = document.getElementById("table");
      

      tabell.innerHTML ="";

     

     //Loop through i and j to create rows and table cells both horizontal and vertical.
     
     
      for(let i = 0; i < linjer.length; i++){

        let tr = document.createElement("tr");
        
//Tell that in each row it will follow i + 1 that will show each row from the csv file. 
        tr.textContent = i + 1;
       
//get information on what will show in the columns by continue through the arrays csv file and show what you got from looping through i and the i + 1.
        for(let j = 0; j < linjer[i].length; j++){

          let td = document.createElement("td");

          td.textContent = linjer[i][j];
//Creates all the rows and columns
          tr.appendChild(td);
        }

        tabell.appendChild(tr);

      }
//Return out the whole table.
      return tabell
}

// The function creates a new array for each location.
function statsLocation(linjer) {

   linjerOslo = new Array();
   linjerHalden = new Array();
   linjerFrkstad = new Array();
   linjerStav = new Array();



  //checks if array element is the given location and push it through, if not it pushes through the next until the one location that is selected.

  for (let i = 0; i < linjer.length; i++) {

      if (linjer[i][2] === "Oslo") {
          linjerOslo.push(parseInt(linjer[i][3]));

      } else if (linjer[i][2] === "Halden") {
          linjerHalden.push(parseInt(linjer[i][3]));

      } else if (linjer[i][2] === "Fredrikstad") {
          linjerFrkstad.push(parseInt(linjer[i][3]));

      } else if (linjer[i][2] === "Stavanger") {
          linjerStav.push(parseInt(linjer[i][3]));
  }

  }

}


// function get the table needed for the operation, create a variable to find every amount type for each location.
//Creates the table for the max, min, avg and total amount of all and each locations. mostly the same as earlier.
//The difference is that it writes the table deppending on what is selected in the option selector from html.
// Also creates an extra row to show the content in each column. 

function statsTable(chosen) {

  let tabell = document.getElementById("table2");
  tabell.hidden = false;

  let allLinjer = [total(linjer, 3), max(linjer, 3), min(linjer, 3), average(linjer, 3)];
  let haldenLinjer = [total1(linjerHalden), min1(linjerHalden) , max1(linjerHalden),avg1(linjerHalden) ];
  let osloLinjer = [total1(linjerOslo), min1(linjerOslo) , max1(linjerOslo),avg1(linjerOslo) ];
  let frkstadLinjer = [total1(linjerFrkstad), min1(linjerFrkstad) , max1(linjerFrkstad),avg1(linjerFrkstad) ];
  let stavLinjer = [total1(linjerStav), min1(linjerStav) , max1(linjerStav), avg1(linjerStav)];
  let content = ["Total amount", "Max amount", "Min amount", "Average amount"];

 tabell.innerHTML = "";

 var tr = document.createElement("tr")
 var tr2 = document.createElement("tr")

  for (let i = 0; i < allLinjer.length; i++) {

      var td1 = document.createElement("td");

      td1.textContent = content[i]

      tr.appendChild(td1)

      

          for (let j = 0; j < 1; j++) {

            var td = document.createElement("td");


            if (chosen === "All") {

                td.innerHTML = allLinjer[i];


            } else if (chosen === "Halden") {
                td.innerHTML = haldenLinjer[i];


            } else if (chosen === "Oslo") {
                td.innerHTML = osloLinjer[i];


            } else if (chosen === "Fredrikstad") {
                td.innerHTML = frkstadLinjer[i];

            } else if (chosen === "Stavanger") {
                td.innerHTML = stavLinjer[i];


            }

          tr2.appendChild(td);

      }

      tabell.appendChild(tr);
      tabell.appendChild(tr2)

  }
}


// Drawing the graph out from the array where i choose to present each location in alphabetical order. 
// It gets the canvas to write the content on and a context that is written out in 2D. 
// The header and decor is the header text and decoration around the graph that i makes be hidden until the graph shows after loading the csv file. 
function drawStatistics() {

  let totalArray = [total1(linjerFrkstad), total1(linjerHalden), total1(linjerOslo),  total1(linjerStav)];
  let underTxt = ["Fredrikstad","Halden", "Oslo" ,"Stavanger"]
  let canvas = document.getElementById("canvasGraph");
  let context = canvas.getContext("2d");
  
  let header = document.getElementById("canvasHead");
  let decor = document.getElementById("canvasDecor");
  decor.hidden = false;
  header.hidden = false;
  
  // describe the position depending on x and y directions.
  var width = 65;
  var x = 90;
  var y = 540;

  // Add what font the text will have 
  // Add clearRect to clear the graph everytime you change location in the selector so the text dont add upon everytime.
  context.font = "18px sans-sarif";
  context.clearRect(0 , 0, canvas.width, canvas.height)
  

  // Create bars from the array created earlier in the function
  for(var i = 0; i < totalArray.length; i++){
    let height = totalArray[i] /6;

    context.fillStyle = "cyan";
    context.fillText(underTxt[i], x, y);
    
    context.fillRect(x, canvas.height - height - 40, 50, height);
    x += width + 70;
  }
}

