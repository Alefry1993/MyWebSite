window.onload = startup;

function startup(){

    let arr = ["23", "5", "1", "123", "53", "123", "565566", "23", "434", "234"];
    let max =0;

    for(let i = 0; i < arr.length; i++){
     if(arr[i] > max)
        max = arr[i]
    }

    console.log(max);

   

}