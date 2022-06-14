  
  window.onload = christmasTree; /*Start the site with christmasTree function*/
 
  function christmasTree(){
  
  /*Creating variables for the symbol we are gonna use and spacing to make it possible to show in console as in document.
   We are also calling on the print paragraph in HTML, to have a place to print out the christmasTree in the document.*/ 
  var symbol="#";
  var mellomrom = "";
  var print= document.getElementById("print"); 
  
/*Printing out a nested loop, so you can determained the rows and columns for the Christmas tree.*/  
for(i=0; i<12; i++)
{     
    for(j=1; j<(i*2); j++)
      {
        mellomrom += symbol;          
        print.innerHTML += symbol; 
      }
        print.innerHTML +="<br>"; 
        console.log(mellomrom); /*Console logging the the between to show the tree easier*/    
 }

/*Do the same here, just this is for the foot to the tree, and its just four coloumns.*/
 for(i=1; i<=4; i++)
 { 
     for(j=1; j<5; j++)
     {
         mellomrom += symbol;
         print.innerHTML += symbol; 
     }
     print.innerHTML +="<br>";   
}
}
      