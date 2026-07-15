/* =====================================
   LOADING
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 800);

        chuvaConfete();

    }, 2500);

});


/* =====================================
   CARTA DIGITANDO
===================================== */

const texto = `

Oi, meu amor...

Hoje é um dos dias mais especiais da minha vida.

Porque hoje comemoramos os seus 17 anos.

Obrigado por existir.

Obrigado por fazer meus dias mais felizes.

Obrigado por sempre estar ao meu lado.

Você mudou completamente a minha vida.

Eu te amo mais do que qualquer texto poderia explicar.

Feliz aniversário, princesa.

❤️

`;

let i = 0;

function escrever(){

    if(i < texto.length){

        document.getElementById("typing").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever,45);

    }

}

setTimeout(escrever,3500);



/* =====================================
   CONTADOR
===================================== */

const nascimento = new Date("2009-07-17");

function atualizarTempo(){

    const agora = new Date();

    const diff = agora - nascimento;

    const dias = Math.floor(diff / (1000*60*60*24));

    const horas = Math.floor(diff / (1000*60*60));

    const minutos = Math.floor(diff / (1000*60));

    document.getElementById("tempo").innerHTML=`

        <h3>${dias.toLocaleString()} dias</h3>

        <h3>${horas.toLocaleString()} horas</h3>

        <h3>${minutos.toLocaleString()} minutos</h3>

    `;

}

setInterval(atualizarTempo,1000);

atualizarTempo();



/* =====================================
   CONFETE
===================================== */

function chuvaConfete(){

confetti({

particleCount:180,

spread:160,

origin:{y:0.6}

});

}



/* =====================================
   BOTÃO FINAL
===================================== */

document.getElementById("surpresa").onclick=()=>{

    chuvaConfete();

    alert("❤️ Eu te amo infinitamente, Anthonia ❤️");

}



/* =====================================
   CORAÇÕES CAINDO
===================================== */

function criarCoracao(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-50px";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animation="cair "+(4+Math.random()*4)+"s linear";

    heart.style.zIndex="999";

    heart.style.pointerEvents="none";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(criarCoracao,400);



/* =====================================
   ANIMAÇÃO SCROLL
===================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});


document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(100px)";

sec.style.transition="1s";

observer.observe(sec);

});



/* =====================================
   ZOOM NAS FOTOS
===================================== */

document.querySelectorAll(".fotos img").forEach(img=>{

img.onclick=()=>{

img.classList.toggle("zoom");

}

});