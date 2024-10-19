const numeroSecreto = Math.floor(Math.random() * 100) + 1;
document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const palpite = parseInt(document.getElementById('palpite').value);
    const calculos = document.getElementById('calculos');

    if (palpite === numeroSecreto) {
        calculos.innerText = `Parabéns! Você adivinhou o número correto: ${numeroSecreto}.`;
    } else if (palpite < numeroSecreto) {
        calculos.innerText = 'Seu palpite é muito baixo. Tente novamente!';
    } else {
        calculos.innerText = 'Seu palpite é muito alto. Tente novamente!';
    }
});