window.onload = startup


var x = 0;
var shoppingList = [x];

function startup(){
document.getElementById("btnTask1").onclick = shopping;
}


function shopping()
{
    
    
 shoppingList[x] = document.getElementById("text1").value;
 x++;
 document.getElementById("text1").value = "";

   var e = "<hr/>";   
    
   for (var y=0; y<shoppingList.length; y++)
   {
     e += "Item " + y + " = " + shoppingList[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}