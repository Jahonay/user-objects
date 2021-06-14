const button = document.querySelector('#button');



let user = {
    name:"john",
    password:"poopy"
}

function verifyUser(user){
    var n = document.getElementById('u').value.toLowerCase();
    var pw = document.getElementById('pw').value.toLowerCase();
   // n=n.toLowerCase();
    //pw = pw.toLowerCase();

    if(n==user.name && pw==user.password){
        console.log("true");
    }
    else{
        console.log("false");
    }
    console.log(n);
    console.log(pw);
}

/*
button.addEventListener('click', verifyUser);
*/