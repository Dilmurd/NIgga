let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let score = document.querySelector(".score")
let score1 = document.querySelector(".score1")
let random = document.querySelector(".zero")
let random1 = document.querySelector(".zero1")

btn.addEventListener("click",function (){
    let res = Math.floor(Math.random() * 10)
    random.textContent = res;
    score.textContent = +score.textContent + res;

})
btn1.addEventListener("click",function (){
    let res = Math.floor(Math.random() * 10)
    random1.textContent = res;
    score1.textContent = +score.textContent + res;

})