const valorVenda = document.getElementById("valorVenda");
const valorICMS = document.getElementById("valorICMS");
const valorFinal = document.getElementById("valorFinal");
const button = document.getElementById("calculate");
const valorReduzido = document.getElementById("valorReduzido");

const cleanBtn = document.getElementById("cleanBtn");

// Função para limpar os inputs
function clean() {
    valorVenda.value = "";
    valorICMS.value = "";
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
