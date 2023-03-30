import { Signup } from "./signup.js";
import { Login } from "./login.js";


// const login  = new Login();


// handling signup
const form__signup = document.querySelector(".form__signup");
const login_form   = document.querySelector(".login_form");

const email = document.querySelector("#email"); 
const name  = document.querySelector("#name");
const pass  = document.querySelector("#pass");


form__signup.onsubmit = function(e){
    e.preventDefault();
    const signup = new Signup(name.value,email.value,pass.value);
    signup.doSignUp("login.html");
}

login_form.onsubmit = function(e){
    e.preventDefault();
    const login = new Login(email.value,pass.value);
    alert(`Hey ${login.email}! Congratulations!`)
    login.doLogin("login.html");
}


