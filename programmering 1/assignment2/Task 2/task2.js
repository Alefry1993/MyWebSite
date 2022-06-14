window.onload = startUp; /*Window start with a startUp function*/

/*The function startUp that calls on the button in HTML, and connects to logIn function*/
function startUp(){

    document.getElementById("btnLogg").onclick = logIn;
}

function logIn(){


    /*Making to variables connected to the input fields in HTML, and get out the value you will put in the input fields*/
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    /*What happends if username and password is the same*/
    if(username === password ){
        alert("Username and password has to be different")
        document.getElementById("utskrift").innerHTML = ("Username and password has to be different")


     /*if username and password is no longer matched, then this will happend if you have lower than 8 characters*/ 
    } else if(password.length <8){
            alert("Password has to be more than 8 characters long")
            document.getElementById("utskrift").innerHTML = ("Password has to be more than 8 characters long")
   

    /*if the two ifs over is passed, this will happend if your password have more than 32 characters*/
    } else if(password.length >32){
        alert("password can`t be longer than 32 characters")
        document.getElementById("utskrift").innerHTML = ("password can`t be longer than 32 characters")


    /*If every if fails and checks out, this will happend and welcome you to the site and reload the page back to start*/
    } else{

        alert("Hello" + " " + username + "!" + " " + "You are now logged in")
        document.location.reload(true)

    }
}