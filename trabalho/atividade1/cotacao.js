function calcularCotacoes() {
    const cotacao = parseFloat(document.getElementById("cotacao").value);

    if (isNaN(cotacao) || cotacao <= 0) {
        document.getElementById("resultadoCotacoes").textContent = "Por favor, informe uma cotação válida.";
        return;
    }

    const aumento1 = cotacao * 1.01;
    const aumento2 = cotacao * 1.02;
    const aumento5 = cotacao * 1.05;
    const aumento10 = cotacao * 1.10;

    document.getElementById("resultadoCotacoes").innerHTML =
        `Valor com aumento de 1%: R$ ${aumento1.toFixed(2)}<br>` +
        `Valor com aumento de 2%: R$ ${aumento2.toFixed(2)}<br>` +
        `Valor com aumento de 5%: R$ ${aumento5.toFixed(2)}<br>` +
        `Valor com aumento de 10%: R$ ${aumento10.toFixed(2)}`;
}
