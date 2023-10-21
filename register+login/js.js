document.addEventListener("DOMContentLoaded", function(event){

    const registerform = document.getElementById("register-form");
    const showpassword = document.getElementById("ssenha");
    
    
    
    const users = [];
    
    
    registerform.addEventListener("submit", function(event){
        event.preventDefault()
    
        const email = document.getElementById("register-email").value; 
        const senha = document.getElementById("register-password").value; 
        const confirmar = document.getElementById("confirmation-password").value;
    
        const user = users.find(user => user.email === email);
    
    
        const existingemail = users.find(user => user.email === email);
    
    
        if(existingemail || senha != confirmar){
            document.getElementById("login-message").textContent="Ja existe um login com esse nome ou a senha esta diferente"
        }else{
    
            users.push({email, senha});
            document.getElementById("login-message").textContent="Cadastrado com sucesso"
    
    }
    
    })
    
    const mostrar_senha = document.getElementById("showpassword");
    const senha = document.getElementById("register-password") ;
    
    mostrar_senha.addEventListener("click", function(event){
        event.preventDefault();
    
    if(senha.type === "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }
    })
    
    
    })