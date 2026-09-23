        // Alterando um título
        const titulo1 = document.getElementById('titulo-ex1');
        document.getElementById('btn-ex1').addEventListener('click', () => {
            titulo1.textContent = 'Olá, JavaScript!';
        });

        // Alterando a cor de fundo
        document.getElementById('btn-ex2').addEventListener('click', () => {
            //cria uma variavel lista
            const cores = ['#e0f7fa', '#ffebee', '#e8f5e9', '#fffde7', '#ff0000', '#1100ff'];
            //coloca um, valor aleatorio que está na lista
            const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            //coloca esses valores aleatorios como o rgba
            document.body.style.backgroundColor = corAleatoria;
        });

        // Alterando a cor de um texto
        const texto3 = document.getElementById('texto-ex3');
        document.getElementById('btn-ex3').addEventListener('click', () => {
            texto3.style.color = 'blue';
        });

        // Mostrar e esconder um elemento
        const paragrafo4 = document.getElementById('paragrafo-ex4');
        document.getElementById('btn-ex4').addEventListener('click', () => {
            if (paragrafo4.style.display === 'none') {
                paragrafo4.style.display = 'block';
            } else {
                paragrafo4.style.display = 'none';
            }
        });

        // Contador de cliques
        let contador5 = 0;
        const display5 = document.getElementById('contador-ex5');
        document.getElementById('btn-ex5').addEventListener('click', () => {
            contador5++;
            display5.textContent = contador5;
        });

        // Alterando o texto com um campo de entrada
        const input6 = document.getElementById('input-ex6');
        const resultado6 = document.getElementById('resultado-ex6');
        document.getElementById('btn-ex6').addEventListener('click', () => {
            resultado6.textContent = input6.value;
        });

        // Alterando uma imagem
        const imagem7 = document.getElementById('imagem-ex7');
        let alternarImg = false;
        document.getElementById('btn-ex7').addEventListener('click', () => {
            alternarImg = !alternarImg;
            if (alternarImg) {
                imagem7.src = "adult.avif";
            } else {
                imagem7.src = "baby.avif";
            }
        });

        // Aumentando o tamanho de um texto
        const texto8 = document.getElementById('texto-ex8');
        let tamanhoFonte8 = 16;
        document.getElementById('btn-ex8').addEventListener('click', () => {
            tamanhoFonte8 += 2;
            texto8.style.fontSize = tamanhoFonte8 + 'px';
        });

        // 9. Criando elementos com JavaScript
        const lista9 = document.getElementById('lista-ex9');
        let qtdItens9 = 0;
        document.getElementById('btn-ex9').addEventListener('click', () => {
            qtdItens9++;
            const novoLi = document.createElement('li');
            novoLi.textContent = `Item ${qtdItens9}`;
            lista9.appendChild(novoLi);
        });

        // 10. Mini projeto – Painel de controle
        const pTitulo = document.getElementById('painel-titulo');
        const pTexto = document.getElementById('painel-texto');
        let tamTitulo10 = 24;

        document.getElementById('btn-p-titulo').addEventListener('click', () => {
            pTitulo.textContent = 'Título Alterado com Sucesso!';
        });

        document.getElementById('btn-p-fundo').addEventListener('click', () => {
            document.body.style.backgroundColor = '#d1c4e9';
        });

        document.getElementById('btn-p-texto').addEventListener('click', () => {
            pTexto.style.color = '#d32f2f';
        });

        document.getElementById('btn-p-aumentar').addEventListener('click', () => {
            tamTitulo10 += 4;
            pTitulo.style.fontSize = tamTitulo10 + 'px';
        });

        document.getElementById('btn-p-esconder').addEventListener('click', () => {
            pTexto.style.display = 'none';
        });
        document.getElementById('btn-p-mostrar').addEventListener('click', () => {
            pTexto.style.display = 'block';
        });