function zeroAEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

const timer = document.querySelector('#tempo');

let segundos = 0;
let minutos = 0;
let horas = 0;
let start;

function cronometro() {
    start = setInterval(() => {
        segundos += 1; 
        timer.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`;

        if(segundos === 60) {
            segundos = 0;
            minutos += 1;
        }

        if (minutos === 60) {
            minutos = 0;
            horas += 1;
        }

        if(horas === 24) {
            segundos = 0;
            minutos = 0;
            horas = 0;
        }
    }, 1000);
}

document.addEventListener('click', e => {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {
        clearInterval(start);
        cronometro();    
        timer.style.color = 'black';
    }

    if(elemento.classList.contains('pausar')) {
        clearInterval(start);
        timer.style.color = "red"
    }

    if(elemento.classList.contains('zerar')) {
        clearInterval(start);
        timer.style.color = 'black';
        timer.innerHTML = `${zeroAEsquerda(horas = 0)}:${zeroAEsquerda(minutos = 0)}:${zeroAEsquerda(segundos = 0)}`;
    }
});

