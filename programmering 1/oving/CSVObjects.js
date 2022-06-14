window.onload = function (){
    let filHenter = document.getElementById("file");
    filHenter.addEventListener("change", hentFilObject)
}

function hentFilObject(event){
    //henter den valgte fil opplastningen.
    let file = event.target.files[0];
    let filLeser = new FileReader();

    //Leser filen som text og kaller anonmym funksjon naar den er ferdig lastet.
    filLeser.readAsText(file);
    filLeser.onload = function (){
        //splitter paa newline
        const linjer = filLeser.result.split("\n");
        
        //Løkke for aa iterere igjennom linjene.
        for (var i = 0; i < linjer.length; i++){
            //Deler linjene opp i elementer
            linjer[i] = linjer[i].split(",");
            //Lager elementene om til et objekt.
            linjer[i] = {etternavn : linjer[i][0],
                        fornavn : linjer[i][1],
                        ssn : linjer[i][2],
                        final : linjer[i][3]};
        }
        console.log(linjer);
        main2(linjer);
    }
}

function main2(array){
    console.log(peakGradeObj(array));
}

//Finner hoyeste "final" grade i medsendt array. 
function peakGradeObj(array){
    let peak =1030;
    for ( var i = 0; i < array.length; i++){
        if(array[i].final > peak) peak = array[i].final;
    }
    return peak;
}