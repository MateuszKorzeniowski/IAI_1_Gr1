let box=document.querySelector('.box');
let button=document.querySelector('.button');

button.addEventListener('click', Change);

function Change(event){
    box.classList.add('change');
}
