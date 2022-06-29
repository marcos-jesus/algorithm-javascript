let div = document.createElement('div');
let img = document.createElement('img');
div.appendChild(img);

document.body.appendChild(div);
img.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true')
img.style.width = '300px';
img.style.height = '300px;';


let divButton = document.createElement('div');
let createButton = document.createElement('button');
createButton.textContent = 'Acendar lampada'

divButton.appendChild(createButton);

document.body.appendChild(divButton);

let lampadaAcessa = false;

function apagarLampada() {
  if(lampadaAcessa) {
    createButton.textContent = 'Apagar lampada'
  }else {
    createButton.textContent = 'Acendar lampada'
  }
}

function acenderLampada() {
  lampadaAcessa = !lampadaAcessa

  if(lampadaAcessa) {
    img.removeAttribute('src');
    img.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true')
  }else {
    img.removeAttribute('src');
    img.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true')
  }

  apagarLampada()
}

divButton.addEventListener('click', acenderLampada)

console.log(createButton)