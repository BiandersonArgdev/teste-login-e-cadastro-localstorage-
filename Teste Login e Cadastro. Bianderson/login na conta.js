document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("login-form");
    const mensagemLogin = document.getElementById("mensagem-login");

    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const senha = document.getElementById("login-senha").value;

        // Recupera a lista de usuários cadastrados
        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se existe um usuário com o mesmo nome e senha
        const usuarioEncontrado = usuariosCadastrados.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
            mensagemLogin.textContent = "Login realizado com sucesso!";
            mensagemLogin.style.color = "green";
        } else {
            mensagemLogin.textContent = "O email ou a senha estão incorretos.";
            mensagemLogin.style.color = "red";
        }

        loginForm.reset();
    });
});
