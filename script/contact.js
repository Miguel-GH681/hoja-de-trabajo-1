const nameInput = document.getElementById('nameInput');
const dateInput = document.getElementById('dateInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const formButton = document.getElementById('formButton');
const modalBody = document.getElementById('modalBody');

const inputs = document.querySelectorAll('.input-container input, textarea');

inputs.forEach((input)=>{
    input.addEventListener("blur", ()=>{
        const name = nameInput.value;
        const date = dateInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(name.length > 0 && date.length > 0 && message.length > 0 && emailRegex.test(email)){
            formButton.setAttribute('data-bs-toggle', 'modal');
        }
    });
});

formButton.addEventListener('click', ()=>{
    const name = nameInput.value;
    const date = dateInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(name.length > 0 && date.length > 0 && message.length > 0 && emailRegex.test(email)){
        console.log(`Nombre: ${name}
        fecha de nacimiento: ${date}
        correo electrónico: ${email}
        mensaje: ${message}`);

        const modalBody = document.getElementById('modalBody');
        const modalName = document.createElement('p');
        modalName.textContent = 'Nombre: ' + name;
        const modalDate = document.createElement('p');
        modalDate.textContent = 'Fecha de nacimiento: ' + date;
        const modalEmail = document.createElement('p');
        modalEmail.textContent = 'Correo electrónico: ' + email;
        const modalMessage = document.createElement('p');
        modalMessage.textContent = 'Mensaje: ' + message;
        
        modalBody.appendChild(modalName);
        modalBody.appendChild(modalDate);
        modalBody.appendChild(modalEmail);
        modalBody.appendChild(modalMessage);
    }
});