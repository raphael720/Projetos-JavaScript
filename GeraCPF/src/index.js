import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

function CPF() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
};

document.addEventListener('click', (event) => {
    const el = event.target;
    if(el.classList.contains('gera-cpf')) {
        CPF();
    }
});
