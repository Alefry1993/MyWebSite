window.onload = function(){
    let filHenter = document.getElementById("file");
    filHenter.addEventListener("change", hentFilObject )
}

function hentFil2d(event){
    let file = event.target.files[0];
    let filLeser = new FileReader();

    filLeser.readAsText(file);
    filLeser.onload = function(){
        const linjer = filLeser.result.split("\n");

        console.log(linjer);

        for(var i = 0; i < linjer.lengt; i++){
            console.log(linjer[i]);
            linjer[i] = linjer[i].split(",");
        }
        console.log(linjer);
        main(linjer);
    }

}

function hentFilObject(event){
    let file = event.target.files[0];
    let filLeser = new FileReader();

    filLeser.readAsText(file);
    filLeser.onload = function(){
        const linjer = filLeser.result.split("\n");

        console.log(linjer);

        for(var i = 0; i < linjer.lengt; i++){
            linjer[i] = linjer [i].split(",")
            linjer[i] = {etternavn : linjer[i][0],
                         fornavn : linker[i][1],
                         ssn : linjer[i][2],
                         grade1 : linjer[i][3],
                         grade2 : linjer[i][4],
                         grade3 : linjer[i][5],
                         grade4 : linjer[i][6],
                         final : linjer[i][7],
                         grade : linjer[i][8]};
        }
        
        console.log(linjer);
        main(linjer);
        main2(linjer);

    }

}

function main2(array){

    console.log(peakGradeObj(array));
    document.getElementById("container").innerHTML = peakGradeObj;
}

function peakGradeObj(array){
    let peak = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].final > peak) peak = array[i].final;
    }
    return peak;
}

/* mandatory 3: task 4 example*/

function main(array){
    console.log(countAmount(array));
    console.log(peakGrade(array, 7));
    console.log(peakGrade(array, 3));
    console.log(averageGrade(array, 6));
}

function countAmount(array){
    return array.length;
}

function peakGrade(array, field){
    let peak = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i][field] > peak) {
            peak = array[i][field];
        }
    }
    return peak;
}

function averageGrade(array, field){
    let total = 0;
    for(var i = 0; i < array.length; i++){
        total += parseInt(array[i][field]);
    }
    let elementAmount = array.length;
    return total/elementAmount;
}