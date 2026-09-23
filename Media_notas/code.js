const formulario = document.getElementById('usuario_login');

formulario.addEventListener('submit', function(event) {
    // Impede a página de recarregar
    event.preventDefault();

    // pega os valores e o *parsefloat* transforma em float
    const nome = document.getElementById('nome').value;
    const titulo = document.getElementById('res');
    const frase = document.getElementById('frase');

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
   
    const visual = document.getElementById("container")
    
    const media = (nota1 + nota2) / 2;

    if (visual) {
        visual.style.display = "flex";
    }
    // Define a situação do aluno 
    if (media >= 7) {
        titulo.innerText = "Aprovado! 🎉";
        frase.innerHTML = `Parabéns <strong>${nome}</strong>, você passou com média <strong>${media.toFixed(1)}</strong>!`;
    
        visual.style.background = "rgba(159, 255, 15, 0.212)";
        visual.style.boxShadow = "0 20px 30px 17px rgba(159, 255, 15, 0.212)";
    } else {
        titulo.innerText = "Reprovado! 💔";
        frase.innerHTML = `Nada legal <strong>${nome}</strong>, você reprovou com média <strong>${media.toFixed(1)}</strong>!`;

        visual.style.background = "rgba(145, 43, 12, 0.21)";
        visual.style.boxShadow = "0 20px 30px 17px rgba(145, 43, 12, 0.21)";
    }

});
