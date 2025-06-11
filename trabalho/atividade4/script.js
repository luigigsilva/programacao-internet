function calcularPedido() {
    const sabor1 = document.getElementById("sabor1").value.trim();
    const sabor2 = document.getElementById("sabor2").value.trim();
    const sabor3 = document.getElementById("sabor3").value.trim();
    const sabor4 = document.getElementById("sabor4").value.trim();
    const refris = parseInt(document.getElementById("refrigerantes").value);

    if (!sabor1 || !sabor2 || !sabor3 || !sabor4 || isNaN(refris) || refris < 0) {
        document.getElementById("resultadoPedido").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const precoPizza = 12.00;
    const precoRefrigerante = 7.00;

    const totalPizza = 4 * precoPizza;
    const totalRefris = refris * precoRefrigerante;
    const total = totalPizza + totalRefris;

    document.getElementById("resultadoPedido").innerHTML =
        `Sabores escolhidos:<br>` +
        `- ${sabor1}<br>` +
        `- ${sabor2}<br>` +
        `- ${sabor3}<br>` +
        `- ${sabor4}<br><br>` +
        `Total a pagar: R$ ${total.toFixed(2)}`;
}
