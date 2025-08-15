//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar todos os nomes digitados
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Captura o campo de entrada
    const nome = input.value.trim(); // Remove espaços antes e depois do nome

    input.setCustomValidity(''); // Limpa mensagem de erros anteriores

    if (nome == '') {
        input.setCustomValidity('Por favor, insira um nome.')
        input.reportValidity(); // Exibe a mensagem no próprio campo
        return;
    }
    
    if (amigos.includes(nome)) {
        input.setCustomValidity(`${nome} já está na lista.`)
        input.reportValidity();
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ''; // Limpa campo
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Captura o <ul> onde os nomes serão exibidos
    lista.innerHTML = ''; // Limpa o conteúdo anterior

    // Percorre o array "amigos" e cria um <li> para cada nome
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        lista.appendChild(li); // Adiciona o <li> na lista <ul>
    });

}

function sortearAmigo() {

    const resultado = document.getElementById('resultado'); // Captura o <ul> do resultado
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        resultado.innerHTML = `<li style="color: red;">⚠ Adicione pelo menos um nome antes de sortear.</li>`;
        return;
    }

    // Gera um índice aleatório entre 0 e (tamanho da lista - 1)
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Seleciona o amigo sorteado usando o índice gerado
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

// sempre que o usuário digitar algo no campo, a mensagem de resultado ou erro é apagada
document.getElementById('amigo').addEventListener('input', () => {
    document.getElementById('resultado').innerHTML = '';
});


