const tituloHero = document.getElementById("titulo-hero");

const palavras = ['economiza', 'agiliza', 'escala', 'muda tudo']

let indice = 0;

function alternarPalavra() {

         indice = (indice + 1) % palavras.length;

        tituloHero.innerHTML = ` <span> ${palavras[indice]}! </span>`; 

        } setInterval(alternarPalavra, 2000); 



function upperH2() {
 
    const h2Elements = document.querySelectorAll('h2');
  

    h2Elements.forEach(h2 => {
        h2.innerText = h2.innerText.toUpperCase();
    });
}


upperH2();


