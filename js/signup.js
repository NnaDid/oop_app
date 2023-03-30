export class Signup {

    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    
    #checkName(){
        let name = this.name;
        return name.length >= 6; 
    }
    
    #checkPassword(){
        let pass = this.password;;
        return pass.length >= 8; 
    }

    doSignUp(redirectUrl){
        let userobject = {
                        name:this.name,
                        email:this.email, 
                        pass:this.password
                    };
        // log to see the stringyfied object
        console.log(JSON.stringify(userobject));

        if(this.#checkName()  && this.#checkPassword()){ 
            localStorage.setItem('user', JSON.stringify(userobject));
            location.href = redirectUrl;
        }else{
            console.log('Please enter correct input');
        }
    }


}