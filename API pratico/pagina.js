const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    //evita que ele atualize a pagina
    event.preventDefault();

    //Cria os valores baseado no input apóis ser enviado
    const painel = document.getElementById('resultado');
    const pokemon = document.getElementById('titulo').value;
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    
    //coneta a api usando a url feita anteriormente
    fetch(url)

    //"então se a api der respota que seja em json"
    .then(resposta => resposta.json())
    
    

    //Se der erro ele manda isso aqui com o numero do erro (4xx, 404, ...)
    .catch(erro => {
        painel.innerText = "É mano deu erro nº ", erro;
    })

    
   
    //pegando os dados desse pokemon aí
    .then(dados => {
        //mostrando na tela
        painel.innerText =`

            Nome: ${dados.name}

            ID Pokedex: ${dados.id}

            Altura: ${dados.height} cm

            Peso: ${dados.weight} kg

            Experiencia Base: ${dados.base_experience} xp

            `;
    })
});