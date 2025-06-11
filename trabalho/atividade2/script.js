function calcularIngredientes() {
    const pessoas = parseInt(document.getElementById("pessoas").value);

    if (isNaN(pessoas) || pessoas <= 0) {
        document.getElementById("resultadoOmelete").textContent = "Por favor, insira um número válido de pessoas.";
        return;
    }

    const ovos = pessoas * 2;
    const queijo = pessoas * 50;

    document.getElementById("resultadoOmelete").innerHTML =
        `Para ${pessoas} pessoa(s), você precisará de:<br>` +
        `- ${ovos} ovos<br>` +
        `- ${queijo} gramas de queijo`;
}
