const form = document.getElementById("form");
const nome = document.getElementById("username");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const mensagem = document.getElementById("message");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validaInput();
});

function validaInput() {
    const nomeValor = nome.value;
    const emailValor = email.value;
    const telValor = tel.value;
    const mensagemValor = mensagem.value;

    if(nomeValor === '') {
        casoDeErro(nome);
    } else {
        casoDeSucesso(nome);
    }

    if(emailValor === '') {
        casoDeErro(email);
    } else {
        casoDeSucesso(email);
    }

    if(telValor === '') {
        casoDeErro(tel);
    } else {
        casoDeSucesso(tel);
    }

    if(mensagemValor === '') {
        casoDeErro(mensagem);
    } else {
        casoDeSucesso(mensagem);
    }
}

function casoDeErro(input) {
    const  formControl = input.parentElement;
    const small = formControl.querySelectorAll("small");

    formControl.className = "controle-de-form erro"
}

function casoDeSucesso(input) {
    const formControl = input.parentElement;

    formControl.className = "controle-de-form sucesso"
}