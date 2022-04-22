const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
// Usando a tabela Asc eu to pegando o caractere que corresponde a cada intervalo,
//EX: as letras maiusculas estão entre o intervalo 65 e 90
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~[]^{}!@#$%*()+=-';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(quant, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    const qtd = Number(quant);

    for(let i = 0; i < qtd; i++) {
        //se o agumento que vem antes do &&
        //for verdadeiro ele vai executar o que tiver logo depois dos && 
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolos());
    }
    // Aqui eu vou juntar tudo em uma unica string;
    //o slice vai servir para dividir a senha no tamanho desejado
    return senhaArray.join('').slice(0, qtd);
}
