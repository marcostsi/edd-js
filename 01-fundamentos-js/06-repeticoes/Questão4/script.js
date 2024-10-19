document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const frase = document.getElementById('frase').value.toLowerCase();

    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let char of frase) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    const calculos = `A frase contém ${contador} vogais.`;
    document.getElementById('calculos').innerText = calculos;
});