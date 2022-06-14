window.onload = startUp;

function startUp(){

    document.getElementById("btnPrint").onclick = utskrift;

}

function utskrift(){

    window.print();

}