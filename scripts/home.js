const titulo = document.getElementById("titulo-hero");

const palavras = ['economiza', 'agiliza', 'escala', 'muda tudo']

let indice = 0;

function alternarPalavra() {
    
         indice = (indice + 1) % palavras.length;

        titulo.innerHTML = `Informática com simplicidade, <span> ${palavras[indice]}! </span>`; 

        } setInterval(alternarPalavra, 2000); 
