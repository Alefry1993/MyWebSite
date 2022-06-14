window.onload = startup;

function startup(){

    let output = document.getElementById("output");
    let triangle = pascalsTriangle(10);


    for(let x = 0; x < triangle.length; x++){
        let tr = document.createElement("tr")

        for(let y = 0; y < triangle[x].length; y++){
            let td = document.createElement("td")
            td.innerHTML = triangle[x][y];
            tr.appendChild(td);

        }

        output.appendChild(tr);
    }
}

function pascalsTriangle(){
    
}