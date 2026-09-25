const valorVenda = document.getElementById("valorVenda");
const valorICMS = document.getElementById("valorICMS");
const valorFinal = document.getElementById("valorFinal");
const button = document.getElementById("calculate");
const valorReduzido = document.getElementById("valorReduzido");

const cleanBtn = document.getElementById("cleanBtn");

const informations = document.getElementById("informations");
const infoICMS = document.getElementById("info");
const closeBtn = document.getElementById("closeBtn");

// Função para limpar os inputs
function clean() {
    valorVenda.value = "";
    valorICMS.value = "";
    valorFinal.value = "";
    valorReduzido.value = "";
}

cleanBtn.addEventListener("click", clean);

// Botão de calcular
button.addEventListener("click", function(event) {
    event.preventDefault();

    // Pegando o valor digitado e transformando em número
    const valorVendaNumerico = parseFloat(valorVenda.value);
    const valorICMSNumerico = parseFloat(valorICMS.value);

    function ValorFinal(a, b) {
        return a - (b * 0.7);
    }

    valorFinal.value = ValorFinal(
        valorVendaNumerico,
        valorICMSNumerico
    ).toFixed(2);

    valorReduzido.value = (valorICMSNumerico * 0.7).toFixed(2);
});

// Função para monstrar as informações
function openInfo () {
    informations.classList.remove('hide');
    informations.classList.add('show');
}

// Função para esconder as informações
function hideInfo () {
    informations.classList.remove('show');
    informations.classList.add('hide');
}

//mostrando a div com as informações
infoICMS.addEventListener("click", openInfo);

//ocultando a div com as informações
closeBtn.addEventListener("click", hideInfo);
