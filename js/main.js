// email
let email = document.getElementById('exampleInputEmail1');
let divEmail = document.getElementById('emailHelp');
let button = document.getElementById('btn-1');
var mail_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// password
let password = document.getElementById('exampleInputPassword1');
let divPass = document.getElementById('passwordHelp');
var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// mobile
let moblie = document.getElementById('exampleInputMobile');
let divMobile = document.getElementById('mobileHelp');
let mobile_format = (/077[0-9]{7}/gm);
//check
let check = document.getElementById('exampleCheck1');
let checkCheck = document.getElementById('Check-input');
let checkP = document.getElementById('check-p');
checkP.style.display = "none";
button.addEventListener('click', form);

function form (){
if (email.value == ""){
        divEmail.innerHTML ="The email field is required.";
        divEmail.style.color="red"
    } else {
        divEmail.innerHTML = " ";

        if(email.value.match(mail_format)){
        } else {
        divEmail.innerHTML ="Not Valid";
        divEmail.style.color="red"

    }
    }
    
if(password.value == ""){
    divPass.innerHTML = "The password field is required."
    divPass.style.color="red"
    }else{
    divPass.innerHTML = " ";
    if(password.value.match(regularExpression)){
    } else {
        divPass.innerHTML = "Not Valid ";
    }
}

if (moblie.value == ""){
    divMobile.innerHTML ="it's not orange num";
    divMobile.style.color="red"
} else{
    divMobile.innerHTML = " ";
    if(moblie.value.match(mobile_format)){
    } else {
    divMobile.innerHTML ="Not Valid";
    divMobile.style.color="red"
    }
}

if(check.checked){
    checkP.innerHTML = "";
    checkP.style.display = "none";
}else{
    checkP.innerHTML = "The Terms & Conditions Not Checked";
    checkP.style.color="red"
    checkP.style.display = "block";
}
}



