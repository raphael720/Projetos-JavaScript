const tarefa = document.querySelector('.container input');
const lista = document.querySelector('.container ul');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limparInput() {
    tarefa.value = '';
    // O focus() => ele vai colocar o cursor locado no input
    tarefa.focus();
}

function criaButtonApagar(li) {
    //estou crinado um elemento butão 
    const button = document.createElement('button');
    //colocando um nome pra ele
    button.innerText = 'apagar';
    //Aqui eu to atribuindo ao button uma class com nome apagar
    button.setAttribute('class', 'apagar');
    //aqui, for fim, estou colocado esse butão dentro da tarefa(li)
    li.appendChild(button);
}

function criaTarefa(valorTarefa) {
    //aqui eu to criando um LI que vai ficar guardado na varivel topico
    const topico = criaLi();

    //aqui tocolocando o que foi digitado no input dentro do topico
    topico.innerHTML = valorTarefa;

    //to adicionado o topico na lista
    lista.appendChild(topico);

    //aqui estou criando um botão e colocando ele dentro da lista
    criaButtonApagar(topico)

    //aqui eu to limpando o input
    limparInput();

    //aqui eu to salvando as tarefas
    salvarTarefas();
}

//aqui eu to querendo saber se usuario usou a tecla enter para criar uma tarefa
tarefa.addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        if (!tarefa.value) {
            return;
        }
        criaTarefa(tarefa.value);
    }
});

document.addEventListener('click', (e) => {
    const elemento = e.target;
    
    if(elemento.classList.contains('adicionar')) {
        //Aqui ele ta verificando se a tarefa que foi enviada esta vazia
        if (!tarefa.value) {
            return
        }
        //Aqui essa função esta criando uma tarefa e colocando ela na lista
        criaTarefa(tarefa.value);
    }

    if(elemento.classList.contains('apagar')) {
        //aqui eu to removendo o pai desse elemento, consequentemente vai remover todos os seus filhos
        elemento.parentElement.remove();
        //esse salvarTarefas esta aqui para atualizar o array
        salvarTarefas();
    }
});

function salvarTarefas() {
    //aqui eu estou criando duas variaveis que vai pegar todos os li da lista e outra que 
    //vai armazenar os valores de cada li, repectivamente
    const liDeTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefas of liDeTarefas) {
        let valorTarefas = tarefas.innerText;
        //aqui no replace() eu to trocando 'apagar' por '' e o trim() ele ta tirando os espaços
        valorTarefas = valorTarefas.replace('apagar', '').trim();
        //aqui eu to colocando esses valores dentro do array
        listaDeTarefas.push(valorTarefas);
    }

    //aqui eu to transformando o array em string no formato JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //aqui eu to atribuindo no localStorage uma key que tem o nome de tarefas e que vai receber a variavel tarefasJSON
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
    //aqui a variavel ta pegando tudo que ta dentro da key tarefas la do localStorage
    const minhasTarefas = localStorage.getItem('tarefas');
    //aqui eu to transformando a string JSON de volta em um array
    const todasAsTarefas = JSON.parse(minhasTarefas);

    //aqui eu to fazendo um for para pegar cada um desses elementos e criar uma tarefa
    for(let tarefa of todasAsTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();