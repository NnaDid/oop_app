export class Login {

    constructor(email, password){ 
        this.email = email;
        this.password = password;
    } 
    
    #checkPassword(){
        let pass = this.password;
        return pass.length >= 8 && JSON.parse(localStorage.getItem('user')).pass; 
    }

    doLogin(redirectUrl){
        if(this.#checkPassword()){  
            localtion.href = redirectUrl;
        }else{
            console.log('Incprrect username or password');
        }
    }


}