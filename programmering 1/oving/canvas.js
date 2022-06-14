window.onload = function () {
    var canvas = this.document.getElementById("canvasExample")
    var context = canvas.getContext("2d")

    //canvasHelloWorld(context);
    //patternDrawing(context);
    drawCircle(context);
}

function canvasHelloWorld(ctx){
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 400);
    ctx.stroke();

}

function patternDrawing(ctx){

    for (let i = 0; i <= 400; i+= 100){
        for(let j = 0; j <=400; j+=20 ){
            ctx.moveTo(i, 0);
            ctx.lineTo(j,400) ; 
        } 
    }ctx.stroke();
  
     
    
}

function drawCircle(ctx){

    ctx.arc(200,200,100,0,2*Math.PI);
    ctx.stroke();
}