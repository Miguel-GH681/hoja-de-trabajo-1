let tblCaminata = document.getElementById("tblCaminata");
let tblLancha = document.getElementById("tblLancha");
let tblPueblo = document.getElementById("tblPueblo");

let buttons = document.querySelectorAll("button");
let myComments = [];

let comments = [
    'La caminata por la escalinata fue cansada, pero la vista del lago valió completamente el esfuerzo.',
    'El paseo en lancha sobre el lago fue tranquilo, rodeado de montañas y aire fresco que revitaliza.',
    'Subir la escalinata permitió apreciar el paisaje desde arriba, con el lago brillando bajo la luz del sol.',
    'El lago tenía aguas cristalinas, perfectas para disfrutar un recorrido en lancha bajo el cielo despejado.',
    'Cada peldaño de la escalinata revelaba un nuevo ángulo del lago, más impresionante que el anterior.',
    'La lancha avanzaba suavemente, creando ondas que reflejaban el cielo azul sobre el lago infinito.',
    'La combinación de subir la escalinata y luego navegar el lago hizo el viaje inolvidable.',
    'El silencio del lago solo se interrumpía con el sonido rítmico del motor de la lancha.',
    'Desde la cima de la escalinata, el lago parecía un espejo gigante que reflejaba las montañas.',
    'El recorrido en lancha nos permitió acercarnos a rincones del lago que desde arriba parecían inalcanzables.'
]

let names = [
    'Carlos Méndez',
    'Ana Rodríguez',
    'Luis Herrera',
    'Sofía Morales',
    'Javier Torres',
    'Marta Castillo',
    'Diego Ramírez',
    'Elena Vargas',
    'Pedro Navarro',
    'Laura Fuentes'
]

const getRandom = ()=>{
    myComments = [];
    for(let i = 0; i < names.length; i++){
        const num = Math.floor(Math.random() * 10);
        if(myComments.filter((comment) => comment == num).length == 0){
            myComments.push(num);
            if(myComments.length == 3){
                i = names.length;
            }
        }
    }
}

buttons.forEach((button, index)=>{
    button.addEventListener("click",  ()=>{        
        if(index == 1){
            tblCaminata.classList.remove("dismissTable");
            tblLancha.classList.add("dismissTable");
            tblPueblo.classList.add("dismissTable");
        } else if(index == 2){
            tblCaminata.classList.add("dismissTable");
            tblLancha.classList.remove("dismissTable");
            tblPueblo.classList.add("dismissTable");
        } else{
            tblCaminata.classList.add("dismissTable");
            tblLancha.classList.add("dismissTable");
            tblPueblo.classList.remove("dismissTable");
        }
    })
});

getRandom();
myComments.forEach((value)=>{
    const mainParagraph = document.createElement('p');
    const title = document.createElement('b');
    title.textContent = names[value];
    mainParagraph.appendChild(title);
    const secondaryParagraph = document.createElement('p')
    secondaryParagraph.textContent = comments[value];
    document.getElementById('commentContainer').appendChild(mainParagraph);
    document.getElementById('commentContainer').appendChild(secondaryParagraph);
});




