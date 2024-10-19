const palavraSecreta = 'termo';
let tentativas = 0;

document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const palpite = document.getElementById('palpite').value.toLowerCase();
    const calculos = document.getElementById('calculos');
    tentativas++; 

    if (palpite === palavraSecreta) {
        calculos.innerText = `Parabéns! Você adivinhou a palavra correta: ${palavraSecreta}.`;
    } else {
        calculos.innerText = 'Palavra incorreta. Tente novamente!';
    }
    document.getElementById('tentativas').innerText = `Tentativas: ${tentativas}`;
});