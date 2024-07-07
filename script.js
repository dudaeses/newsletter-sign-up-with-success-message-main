const form = document.getElementById('form');
const formImg = document.getElementById('form-img');
const campo = document.getElementsByClassName('required');
const span = document.getElementsByClassName('span-required');
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // padrão regex para validação de e-mail
const successMessage = document.getElementById('success-message');
const dismissMessage = document.getElementById('dismiss-message');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => { // verifica o resultado da validação do e-mail quando há um submit no formulário e mostra a mensagem de erro ou de sucesso 
    event.preventDefault();
    if(emailValidate()) {
        const email = document.getElementById('email').value;
        successMessage.style.display = 'block';
        form.style.display = "none"; 
        formImg.style.display = "none";
        message.innerHTML = `<p>A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.</p>`;
    } else {
        successMessage.style.display = 'none';
    }
});

dismissMessage.addEventListener('click', () => { // fecha a mensagem de sucesso quando há um clique no botão dismiss-message e volta para o formulário de inscrição
    successMessage.style.display = 'none'; 
    form.style.display = "block"; 
    formImg.style.display = "block"
});

function setError(index){ // mostra a mensagem de erro
    campo[index].style.border = '1px solid hsl(4, 100%, 67%)';
    campo[index].style.background = 'hsl(4, 100%, 92%)';
    campo[index].style.color = 'hsl(4, 100%, 67%)';
    campo[index].style.transition = 'border 0.2s ease';
    span[index].style.display = 'block'; 
}

function removeError(index){ // remove a mensagem de erro
    campo[index].style.border = '';
    campo[index].style.background = '';
    campo[index].style.color = '';
    span[index].style.display = 'none'; 
}

function emailValidate(){ // faz a validação do e-mail
    const email = document.getElementById('email').value; 
    if(!emailRegex.test(email)) {
        setError(0);
        return false;  
    } else {
        removeError(0);
        return true;  
    }
}


