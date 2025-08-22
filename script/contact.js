const nameInput = document.getElementById('nameInput');
const dateInput = document.getElementById('dateInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const formButton = document.getElementById('formButton');

formButton.addEventListener('click', ()=>{
    const name = nameInput.value;
    const date = dateInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if(name.length > 0 && date.length > 0 && message.length > 0 && emailRegex.test(email)){
        formButton.setAttribute('data-bs-toggle', 'modal');
        console.log(`Nombre: ${name}
        fecha de nacimiento: ${date}
        correo electrónico: ${email}
        mensaje: ${message}`)
    } else{
        console.error('Ingrese correctamente todos los datos'); 
    }
});