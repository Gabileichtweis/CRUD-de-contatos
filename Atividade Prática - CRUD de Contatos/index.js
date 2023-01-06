/* -- Criar uma variável global para armazenar uma lista de contatos

-- Criar uma função para adicionar um novo contato. Essa função deverá ser executada ao clique de um botão no html.

-- Todo contato deverá ter nome e telefone. Antes de adicionar o novo contato na lista, deve ser verificado se o telefone 
já foi cadastrado anteriormente. Se já existir, informar ao usuário "Este telefone já foi cadastrado" e não adicioná-lo na lista

-- Criar uma função para listar todos os contatos cadastrados. Essa função deverá ser executada ao clique de um botão no html e 
para cada contato cadastrado deve mostrar no console.log a string "contato - numero". Sendo 'contato' o valor da propriedade nome, 
e 'numero' sendo o valor da propriedade telefone do objeto que esta sendo percorrido. */

let listaDeContatos = [];

function criarNovoContato(){
    let nomePrompt = prompt('Digite o nome do contato: ')
    let numeroPrompt = prompt('Digite o número do contato: ')
    
    if(verificarTelefone(numeroPrompt)){
        alert("Este telefone já foi cadastrado")
        return
    }

    let novoContato = {
        nome: nomePrompt,
        numero: numeroPrompt
    }

    listaDeContatos.push(novoContato)
}
console.log(listaDeContatos)

function verificarTelefone(verificaNumero){
    let existe = listaDeContatos.some((valor) => valor.numero === verificaNumero) 
    return existe
}

function listarContatos(){
    let espacoLista = document.getElementById('lista-contatos')
    espacoLista.innerHTML = '';

    listaDeContatos.forEach((valor) => {
        //console.log(`${valor.nome} - ${valor.numero}`)
        espacoLista.innerHTML += `<p>${valor.nome} - ${valor.numero}</p>`
    });
}

function atualizarContato(){ //Atualizar é pelo indice

    const nomePrompt = prompt('Informe o nome do contato que deseja editar: ')

    const indiceEncontrado = listaDeContatos.findIndex((valor) => valor.nome === nomePrompt)

    if(indiceEncontrado === -1){
        alert('Contato não cadastrado')
        return
    }

    const novoNome = prompt('Digite o novo nome do contato: ')
    const novoNumero = prompt('Digite o novo número do contato: ')

    if(verificarTelefone(novoNumero)){
        alert("Este telefone já foi cadastrado")
        return
    }

    listaDeContatos[indiceEncontrado].nome = novoNome
    listaDeContatos[indiceEncontrado].numero = novoNumero

    listarContatos()
}

function deletarContato(){

    const nomePrompt = prompt('Informe o nome do contato que deseja excluir: ')

    const novaLista = listaDeContatos.filter((valor) => valor.nome !== nomePrompt)

    listaDeContatos = novaLista

    listarContatos()
}