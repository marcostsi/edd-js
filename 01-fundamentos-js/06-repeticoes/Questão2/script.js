document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = parseInt(document.getElementById('numero').value);
    
    const listaPares = document.getElementById('listaPares');
    listaPares.innerHTML = '';
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            const li = document.createElement('li');
            li.textContent = i;
            listaPares.appendChild(li);
        }
    }
});