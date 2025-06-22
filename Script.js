document.addEventListener('DOMContentLoaded', function() {
    const quantitySelect = document.getElementById('quantitySelect');
    const inputMin = document.querySelector('.input-min');
    const inputMax = document.querySelector('.input-max');
    const drawnNumbersDiv = document.getElementById('drawnNumbers');

    // ----------------------------------------------------
    // POPULAR O SELECT COM OPÇÕES DE QUANTIDADE DE NÚMEROS
    // ----------------------------------------------------
    const maxOptions = 10; // Por exemplo, permitir sortear até 10 números
    for (let i = 1; i <= maxOptions; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} número${i > 1 ? 's' : ''}`;
        quantitySelect.appendChild(option);
    }
    // Seleciona a primeira opção (1 número) por padrão
    quantitySelect.value = 1;

    // ----------------------------------------------------
    // FUNÇÃO PARA GERAR E EXIBIR OS NÚMEROS SORTEADOS
    // ----------------------------------------------------
    window.generateNumbers = function() { // Torna a função global para ser acessível pelo onclick
        const quantityToDraw = parseInt(quantitySelect.value);
        const min = parseInt(inputMin.value);
        const max = parseInt(inputMax.value);

        // Validação básica dos inputs
        if (isNaN(min) || isNaN(max) || min > max) {
            drawnNumbersDiv.innerHTML = '<p style="color: red;">Por favor, insira um intervalo válido (mínimo e máximo).</p>';
            return;
        }
        if (isNaN(quantityToDraw) || quantityToDraw <= 0) {
            drawnNumbersDiv.innerHTML = '<p style="color: red;">Por favor, selecione uma quantidade válida de números para sortear.</p>';
            return;
        }

        const sortedNumbers = [];
        for (let i = 0; i < quantityToDraw; i++) {
            // Gera um número aleatório entre min (inclusive) e max (inclusive)
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            sortedNumbers.push(randomNumber);
        }

        // Exibir os números sorteados
        if (sortedNumbers.length > 0) {
            drawnNumbersDiv.innerHTML = `<p><strong>${sortedNumbers.join(', ')}</strong></p>`;
        } else {
            drawnNumbersDiv.innerHTML = '<p>Nenhum número foi sorteado.</p>';
        }
    };
});