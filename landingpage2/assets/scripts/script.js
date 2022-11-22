$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



let nome = window.document.getElementById('nome')
let email = document = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome é válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('gmail.com') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}