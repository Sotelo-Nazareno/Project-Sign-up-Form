var boton = document.querySelector(".send");
boton.addEventListener("click", ()=>{

    let email = document.getElementById("user-email");
    if(email.value.includes("@")){
        event.preventDefault();

        let pass1 = document.getElementById("user_password1");
        let pass2 = document.getElementById ("user_password2");

        if(pass1.value == pass2.value){
            pass1.style.border = "solid 1px green";
            pass2.style.border = "solid 1px green";
            alert("The password match");

        }else{
            pass1.style.border = "solid 1px red";
            pass2.style.border = "solid 1px red";
            alert("The password do not match.Please try again");
            return false;
        }
    }else{
        email.style.border = "solid 1px red";
        alert("please enter a validk email address");
    }

    
});

