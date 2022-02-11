/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome=window.document.querySelector('#nome')
let email=document.querySelector('#email')
let assunto=document.querySelector('#assunto')
let nomeOk=false
let emailOk=false
let assuntoOk=false

nome.style.width='100%'
email.style.width='100%'

function validarNome() {
    let txtNome=document.querySelector('#txtNome')
    if(nome.value.lenght<3) {
        txtNome.innerHTML='O nome deve conter mais de três caracteres!'
        txtNome.style='red'
    } else {
        txtNome.innerHTML='Nome válido'
        nomeOk=true
    }
}
function validarEmail() {
    let txtEmail=document.querySelector('#txtEmail')
    if(email.value.indexOf('@.com')==-1) {
        txtEmail.innerHTML='O e-mail deve conter @.com no final!'
        txtEmail.style='red'
    } else {
        txtEmail.innerHTML="E-mail válido!"
        emailOk=true
    }
}
function validarAssunto(){
    let txtAssunto=document.querySelector('#txtAssunto')
    if(assunto.value.length>=100){
        txtAssunto.innerHTML='Até cem caracteres são permitidos!'
        txtAssunto.style.color='red'
        txtAssunto.display='block'
    } else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}
function enviar() {
    if(nomeOk==true&&emailOk==true&&assuntoOk==true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulátio corretamente!')
    }
  }
