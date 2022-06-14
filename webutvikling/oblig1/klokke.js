window.onload = klokke

function klokke (){

    var utskrift = document.getElementById("klokke");
    var utskrift2 = document.getElementById("dato");
    var utskrift3 = document.getElementById("year")
    var tid = new Date();
    utskrift.innerHTML = tid.getHours() + "." + tid.getMinutes() + "." + tid.getSeconds();
    utskrift2.innerHTML = tid.toLocaleDateString();
    utskrift3.innerHTML = tid.getFullYear();
    setTimeout(klokke,1000);
}




