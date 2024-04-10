const barra = document.querySelector('#containernav2');
let controllo = "false";

function togliricerca()
{
  barra.classList.add('hidden');
}

function ricerca()
{
  if(controllo === "true")
  {
    barra.classList.add('hidden');
    controllo = "false";
  }
  else
  {
    barra.classList.remove('hidden');
    let simbolo = document.querySelector('div#barradiricerca img#chiudi1');
    let simbolo2 = document.querySelector('div#barradiricerca img#chiudi2');
    simbolo.addEventListener('click', togliricerca);
    simbolo2.addEventListener('click', togliricerca);
    controllo = "true"; 
  }

}

let lente = document.querySelector('div .opzione3 a'); 
lente.addEventListener('click', ricerca );


//---------------------------------------------------------------

let listaf = ['Img/Img15.png', 'Img/Img16.png', 'Img/Img17.png'];

function mostrainformazioni()
{
  let container = document.querySelector('#divconto div#flex-conto');
  container.classList.remove('hidden');

    
  for(let i=0; i<listaf.length; i++)
  {
    let fotosrc = listaf[i];
    const img = document.createElement('img');
    img.src = fotosrc;
    img.classList.add('img');
    
    let flexc = document.getElementById('c'+(i+1));
    flexc.appendChild(img);
  }
  conto.removeEventListener('mouseover', mostrainformazioni);

}

function nascondi(){
  const container = document.querySelector('#divconto div#flex-conto');
  
  for(let i=0; i<listaf.length; i++)
  {
    let flexc = document.getElementById('c'+(i+1));
    flexc.removeChild(flexc.firstChild);
  }

  container.classList.add('hidden');
  conto.addEventListener('mouseover', mostrainformazioni);
}


let conto = document.querySelector('h3#scritta');
conto.addEventListener('mouseover', mostrainformazioni);


let container2 = document.querySelector('section div#container8');
container2.addEventListener('click', nascondi);

let container3 = document.querySelector('section div#container10');
container3.addEventListener('click', nascondi);


//---------------------------------------------------------------
let image;

let limgnuove = ['Img/Img12.png', 'Img/Img13.png', 'Img/Img14.png'];
let limgvecchie = ['Img/Img8.png', 'Img/Img9.png', 'Img/Img10.png'];

function ritornafoto(event)
{
    const image = event.currentTarget;
    let indice = parseInt(image.dataset.servizio);
    image.src = limgvecchie[indice-1];
}

function cambiafoto(event)
{
  const image = event.currentTarget;
  let indice = parseInt(image.dataset.servizio);
  image.src = limgnuove[indice-1];
  image.classList.add('img');
  image.addEventListener('mouseout', ritornafoto);
}


image = document.getElementById('imgs1');
image.addEventListener('mouseover', cambiafoto);

image = document.getElementById('imgs2');
image.addEventListener('mouseover', cambiafoto);


image = document.getElementById('imgs3');
image.addEventListener('mouseover', cambiafoto);



