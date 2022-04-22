import geraSenha from './geradores';

const resultado = document.querySelector('.resultado h1');
const quantCaracteres = document.querySelector('#caracteres');
const maiusculas = document.getElementById('maiusculas');
const minusculas = document.querySelector('#minusculas');
const numeros = document.querySelector('#numeros');
const simbolos = document.querySelector('#simbolos');
const button = document.querySelector('.button');

function gera() {
    const senha = geraSenha(
        quantCaracteres.value,
        maiusculas.checked, 
        minusculas.checked, 
        numeros.checked, 
        simbolos.checked
    );
    return senha || 'Nada selecionado';
}

export default () => {
    button.addEventListener('click', () => {
        resultado.innerHTML = gera();
    });
};
