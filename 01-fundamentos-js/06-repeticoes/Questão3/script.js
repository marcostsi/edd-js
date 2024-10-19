document.getElementById('meuformulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const numero = parseInt(document.getElementById('numero').value);
    const tabuada = document.getElementById('tabuada');
    tabuada.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li'); 
        li.textContent = `${numero} x ${i} = ${numero * i}`; 
        tabuada.appendChild(li); 
    }
});