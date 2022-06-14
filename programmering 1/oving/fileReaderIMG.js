window.onload = function (){

    var filHenter = document.getElementById("file");
    //filHenter.onchange = filHaandter;
    filHenter.addEventListener("change", filHaandter);
}

function filHaandter(event){
    let fil = event.target.files[0];
    let filLeser = new FileReader();

    filLeser.onload = visBildet;
    filLeser.readAsDataURL(fil);
}

function visBildet(event2){
    let bildePlass = document.getElementById("img");
    bildePlass.innerHTML = "<img src=" + event2.target.result + "/>";
}