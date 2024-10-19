document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const n = parseInt(document.getElementById('n').value);
    const a1 = parseInt(document.getElementById('a1').value);
    const r = parseInt(document.getElementById('r').value);
    const termosList = document.getElementById('termos');
    const somaElement = document.getElementById('soma');
    termosList.innerHTML = '';
    somaElement.innerHTML = '';
    let soma = 0;
    for (let i = 0; i < n; i++) {
        const termo = a1 + i * r;
        soma += termo;

        const li = document.createElement('li');
        li.textContent = termo;
        termosList.appendChild(li);
    }
    somaElement.textContent = `A soma dos ${n} termos é: ${soma}`;
});