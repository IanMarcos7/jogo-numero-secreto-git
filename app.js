let listaNumeroSecreto = [];
let numeroLitime = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female'),
    {rate:1.2};
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'ADIVINHA O NÚMERO SECRETO');
exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroLitime);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1? 'tentativas': 'tentativa';
        let mensenagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensenagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor que o chute');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior que o chute');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLitime + 1);
    let quantidadeElementosLista = listaNumeroSecreto.length;

    if(quantidadeElementosLista == numeroLitime){
        listaNumeroSecreto = [];
    }

    if(listaNumeroSecreto.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSecreto.push(numeroEscolhido);
        console.log(listaNumeroSecreto);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}