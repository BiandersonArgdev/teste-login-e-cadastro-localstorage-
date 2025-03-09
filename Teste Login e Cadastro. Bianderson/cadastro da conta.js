document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");
    const mensagem = document.getElementById("mensagem");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const confirmarEmail = document.getElementById("confirmar-email").value;
        const senha = document.getElementById("senha").value;

        // Verifica se os e-mails são iguais
        if (email !== confirmarEmail) {
            mensagem.textContent = "Os e-mails não coincidem!";
            mensagem.style.color = "red";
            return;
        }

        // Recupera usuários salvos ou cria um array vazio
        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se o e-mail já existe
        const emailJaExiste = usuariosCadastrados.some(usuario => usuario.email === email);

        if (emailJaExiste) {
            mensagem.textContent = "Este e-mail já foi cadastrado!";
            mensagem.style.color = "red";
            return;
        }

        // Cria um novo usuário
        const novoUsuario = { nome, email, senha };

        // Salva o novo usuário no array e armazena no localStorage
        usuariosCadastrados.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        // Aguarda 1,5 segundos e redireciona para login na conta.html
        setTimeout(() => {
            window.location.href = "login na conta.html";
        }, 1500);

        cadastroForm.reset();
    });
});
