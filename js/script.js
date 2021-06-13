var n = document.querySelector('.username').value;
var pw = document.querySelector('.password').value;
const button = document.querySelector('#button');



let user = {
    name:"John",
    password:"poopy"
}

function verifyUser(n, pw){
    if(toString(n)=="john" && toString(pw)=="poopy"){
        console.log("true");
    }
    else{
        console.log("false");
    }
}


button.addEventListener('click', verifyUser(n, pw));

