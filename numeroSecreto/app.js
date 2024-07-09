let listaNumerosSorteados = [];
let numeroMax = 100;
let numeroSecreto = gerarNumeroAleatorio();

let tentativa = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMax}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`
        // como o JavaScript não é tipavel, é possivel mudar o texto que é o parametro da função por uma variavel
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > chute){
            exibirTextoNaTela('p','O número secreto é maior');
        }else{
            exibirTextoNaTela('p','O número secreto é menor');
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if(quantidadeElementosLista == numeroMax){
        listaNumerosSorteados = [];
    }


    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        //add ao final da lista
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}







