const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add('jump');  
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const marioPositon = window.getComputedStyle(mario).bottom.replace("px","");
    const pipePosition = pipe.offsetLeft;

    if(pipePosition <= 70 && pipePosition > 0 && marioPositon < 60){
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`;

        mario.setAttribute("src", "./imagens/game-over.png");
    }
}, 10);

document.addEventListener("keydown", jump);
