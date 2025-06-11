function calcularOperacoes() {
    const n1 = parseInt(document.getElementById("numero1").value);
    const n2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultadoOperacoes").textContent = "Por favor, insira dois números inteiros válidos.";
        return;
    }

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : "Divisão por zero";

    document.getElementById("resultadoOperacoes").innerHTML =
        `Soma: ${soma}<br>` +
        `Subtração: ${subtracao}<br>` +
        `Multiplicação: ${multiplicacao}<br>` +
        `Divisão: ${divisao}`;
}
