let number1 = prompt("birinchi raqamni kiriting");
let number2 = prompt("ikkinchi raqamni kiriting");
let qiymat = prompt("qiymatni kiriting");
const btnEl = document.querySelector(".btn");
const textEl = document.querySelector(".respons");
btnEl.addEventListener('click',() =>{
    textEl.innerHTML = eval(number1 + qiymat + number2)
})