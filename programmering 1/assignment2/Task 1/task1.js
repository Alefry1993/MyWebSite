window.onload = startup/*Start the site with startup function*/

var x = 0; 
var shoppingList = [x]; /*Making an array for the incoming items in the list*/


function startup(){
document.getElementById("btnItem").onclick = shopping; /*Calling on button that will add the items to the list*/

}

function shopping()
{
 shoppingList[x] = document.getElementById("inputItem").value;
 x++;
document.getElementById("inputItem").value =""; /*Get value from the inputfield */


   /*Create a variable for the items that will show, so its not all in one much, but more inbetween*/
   var listen = " ";  
   
   
   /*Using loop to give you each item when button is pressed and will add one more evertytime from 0,1,2,3,4...*/
   for (var y=0; y<shoppingList.length; y++)
   {
     listen += "Item " + y + " = " + shoppingList[y] + "<br/>"; 
   }

   /*Just printing out the first item added, number of items and the last item added*/
   document.getElementById("print1").innerHTML = listen;
   document.getElementById("print2").innerHTML = "First item added to the list:" + " " + shoppingList.slice(0)[0]+ "<br><br> "
   + "Last item added to the list:" + " " + shoppingList.slice(-1)[0] + "<br><br>" + "Number of items in your list:" + " " + x;  
}


