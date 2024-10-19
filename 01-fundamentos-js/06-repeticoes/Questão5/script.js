document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const palavra = document.getElementById('palavra').value;

    let palavraInvertida = '';

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    const calculos = `A palavra invertida é: ${palavraInvertida}`;
    document.getElementById('calculos').innerText = calculos;
});