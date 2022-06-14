window.onload = function (){
    let filHenter = document.getElementById("file");
    filHenter.addEventListener("change", hentFil2d)
}

function hentFil2d(event){
    //henter den valgte fil opplastningen.
    let file = event.target.files[0];
    let filLeser = new FileReader();

    //Leser filen som text og kaller anonmym funksjon naar den er ferdig lastet.
    filLeser.readAsText(file);
    filLeser.onload = function (){
        //splitter paa newline
        const linjer = filLeser.result.split("\n");

        //Lokke for aa iterere igjennom linjene
        for (var i = 0; i < linjer.length; i++){
            //splitter linjene på komma og lagrer det i linjer[i]
            linjer[i] = linjer[i].split(",");
            console.log(linjer[i]);
        }
       
        console.log(linjer);
        main(linjer);
    }
}

function main(array){
    //function(array)
    console.log(countAmount(array));
    console.log(peakGrade(array, 7));
    console.log(peakGrade(array, 3));
    console.log(averageGrade(array, 6));
}

//antall linjer i datasettet.
function countAmount(array){
    return array.length;
}

//Hoyeste grade i valgt felt.
function peakGrade(array, field){
    let peak = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i][field] > peak){
            peak = array[i][field];
        }
    }console.log(peak)
    return peak;
    
}

//Gjennomsnitt karakter i valgt felt
function averageGrade(array, field){
    let total = 0;

    for(var i = 0; i < array.length; i++){
        total += parseInt(array[i][field]);
    }

    let elementAmount = array.length;
    return total/elementAmount;
}