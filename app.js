function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];

    while (numerosSorteados.length < quantidade){
        let numeroAleatorio = gerarNumeroAleatorio(de,ate);
        while (numerosSorteados.includes(numeroAleatorio)){
            numeroAleatorio = gerarNumeroAleatorio(de,ate);
        }
        numerosSorteados.push(numeroAleatorio);
    }

    let texto = document.getElementById("resultado");
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    alterarClassBotao();
}

function gerarNumeroAleatorio(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alterarClassBotao(){
    let alterarClassBotao = document.getElementById("btn-reiniciar");
    if (alterarClassBotao.classList.contains("container__botao-desabilitado")){
        alterarClassBotao.classList.remove("container__botao-desabilitado");
        alterarClassBotao.classList.add("container__botao");
    }else{
        alterarClassBotao.classList.remove("container__botao");
        alterarClassBotao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarClassBotao();
}
    
