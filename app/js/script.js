const btn = document.getElementById("btn");
const ball = document.getElementById("ball");
const priceMth = document.querySelectorAll(".price__mth");
const priceAnn = document.querySelectorAll(".price__ann");

btn.addEventListener("click", function () {
    ball.classList.toggle("active");
    for (let i = 0; i < priceMth.length; i++) {
        priceMth[i].classList.toggle("active");
        priceAnn[i].classList.toggle("active");
    }
})