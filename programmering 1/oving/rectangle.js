window.onload = startup;

function startup(){

    let data = [

        ["ost", 50],
        ["kjeks", 100],
        ["vin", 3400],
        ["netFlix" ,100]



    ];

    drawStatistics(data);
}

function drawStatistics(data){

    let canvas =document.getElementById("canvasExample") 
    let context = canvas.getContext("2d")
    let indent = (canvas.width / data.length +1);
    let xPos = indent;
    let total = 0;

    data.forEach(stat => {
        total += stat[1];
    });

    data.forEach(stat => {
        let height = canvas.height * (stat[1] / total)

        context.fillStyle = "#lelele";
    context.fillText(stat[0], xPos - (stat[0].length), canvas.height)

    context.fillRect(xPos, canvas.height - height - 30, 15, height);


    xPos += indent;
    });

    
   // console.log(total);

   // context.fillRect(100, 125, 150, 150);
    
}