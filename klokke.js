window.onload = klokke

function klokke (){

    var utskrift = document.getElementById("klokke");
    var utskrift2 = document.getElementById("dato");
    var tid = new Date();
    utskrift.innerHTML = tid.getHours() + "." + tid.getMinutes() + "." + tid.getSeconds();
    utskrift2.innerHTML = tid.toLocaleDateString();
    setTimeout(klokke,1000);
}




