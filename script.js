/* ===========================================================
   1. ELEMENTOS DA PÁGINA
=========================================================== */

/*
    Captura todos os elementos HTML que serão utilizados
    durante a execução do site.

    Dessa forma evitamos procurar o mesmo elemento várias
    vezes com getElementById(), tornando o código mais limpo
    e um pouco mais performático.
*/

const loading = document.getElementById("loading");
const typing = document.getElementById("typing");
const tempo = document.getElementById("tempo");
const surpresaBtn = document.getElementById("surpresa");
const music = document.getElementById("music");

/*
    Lista de todas as seções da página.
*/

const sections = document.querySelectorAll("section");

/*
    Lista de todas as imagens da galeria.
*/

const fotos = document.querySelectorAll(".fotos img");


/* ===========================================================
   2. CARTA DE ANIVERSÁRIO
=========================================================== */

/*
    Texto que será exibido através do efeito de
    máquina de escrever.

    Basta alterar este texto para modificar a carta.
*/

const carta = `

Oi, meu amor...

Hoje é um dos dias mais especiais da minha vida.

Porque hoje comemoramos os seus 17 anos.

Obrigado por existir.

Obrigado por iluminar meus dias.

Obrigado por cada sorriso.

Obrigado por cada abraço.

Você mudou completamente a minha vida.

Espero que este seja apenas o primeiro de muitos aniversários que vamos comemorar juntos.

Eu te amo infinitamente.

❤️

`;


/* ===========================================================
   3. INICIALIZAÇÃO DO SITE
=========================================================== */

/*
    Quando toda a página terminar de carregar,
    inicia todas as funcionalidades automaticamente.
*/

window.addEventListener("load", iniciarSite);

/*
    Função principal responsável por iniciar
    todas as partes do projeto.
*/

function iniciarSite() {

    iniciarLoading();

    iniciarObserver();

    iniciarContador();

    iniciarGaleria();

}


/* ===========================================================
   4. LOADING
=========================================================== */

/*
    Exibe uma tela de carregamento por alguns segundos.

    Após esse tempo:

    • desaparece suavemente
    • inicia a carta
    • inicia a música
    • dispara confetes
*/

function iniciarLoading() {

    setTimeout(() => {

        loading.style.transition = "1s";
        loading.style.opacity = "0";

        setTimeout(() => {

            loading.remove();

            iniciarCarta();

            chuvaConfete();

        }, 1000);

    }, 2500);

}


/* ===========================================================
   5. EFEITO MÁQUINA DE ESCREVER
=========================================================== */

/*
    Escreve a carta letra por letra,
    simulando uma máquina de escrever.
*/

function iniciarCarta() {

    let i = 0;

    function escrever() {

        if (i < carta.length) {

            typing.textContent += carta.charAt(i);

            i++;

            setTimeout(escrever, 40);

        }

    }

    escrever();

}


/* ===========================================================
   6. CONTADOR DE TEMPO
=========================================================== */

/*
    Data de nascimento utilizada para calcular
    há quanto tempo a Anthonia nasceu.
*/

const nascimento = new Date("2009-07-17T00:00:00");

/*
    Inicia o contador.
*/

function iniciarContador() {

    atualizarContador();

    setInterval(atualizarContador, 1000);

}

/*
    Atualiza dias, horas, minutos e segundos.
*/

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - nascimento;

    const dias = Math.floor(diferenca / 86400000);

    const horas = Math.floor(diferenca / 3600000);

    const minutos = Math.floor(diferenca / 60000);

    const segundos = Math.floor(diferenca / 1000);

    tempo.innerHTML = `

        <h3>🌎 ${dias.toLocaleString()} dias</h3>

        <h3>🕒 ${horas.toLocaleString()} horas</h3>

        <h3>⏰ ${minutos.toLocaleString()} minutos</h3>

        <h3>❤️ ${segundos.toLocaleString()} segundos</h3>

    `;

}


/* ===========================================================
   7. ANIMAÇÃO DAS SEÇÕES
=========================================================== */

/*
    Utiliza IntersectionObserver para detectar
    quando uma seção entra na tela.

    Quando isso acontece,
    adiciona a classe "show",
    permitindo que o CSS faça a animação.
*/

function iniciarObserver() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    sections.forEach(sec => observer.observe(sec));

}





/* ===========================================================
   9. GALERIA
=========================================================== */

/*
    Permite ampliar apenas uma foto por vez.

    Ao clicar em outra foto,
    a anterior volta ao tamanho normal.
*/

function iniciarGaleria() {

    fotos.forEach(foto => {

        foto.addEventListener("click", () => {

            fotos.forEach(f => {

                f.classList.remove("zoom");

            });

            foto.classList.add("zoom");

        });

    });

}



/* ===========================================================
   11. CONFETES
=========================================================== */

/*
    Dispara uma animação de confetes.

    Utiliza a biblioteca Canvas Confetti.
*/

function chuvaConfete() {

    confetti({

        particleCount: 180,

        spread: 180,

        origin: { y: .6 }

    });

}

