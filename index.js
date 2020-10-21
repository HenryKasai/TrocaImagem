const img = document.querySelector("img");

const botao1 = document.getElementById("proximo");
const iniciar1 = (e) => {
    e.preventDefault();
    img.src = "pexels-maxime-francis-2246478.jpg";
}

const botao2 = document.getElementById("anterior");
const iniciar2 = (e) => {
    e.preventDefault();
    img.src = "pexels-maxime-francis-2246476.jpg";
}

botao1.addEventListener("click", iniciar1);
botao2.addEventListener("click", iniciar2);

