const valorFinal = document.getElementById("valorFinal");

const button = document.getElementById("calculate");

button.addEventListener("click", function(event) {
    event.preventDefault();
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const valorICMS = parseFloat(document.getElementById("valorICMS").value);

    function ValorFinal(valorVenda, valorICMS) {
        return valorVenda - (valorICMS * 0.7);
    }
    valorFinal.value = ValorFinal(valorVenda, valorICMS);
})

