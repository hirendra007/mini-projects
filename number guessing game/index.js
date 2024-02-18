let random;
const max=100;
const min=0;
const number=document.getElementById("gen")
const button=document.getElementById("btn1")
const text=document.getElementById("h1")
random=Math.floor(Math.random()*(max-min))+min;
button.onclick=function(){
    if(number.value<0 || number.value>100){
        text.textContent="Enter a number between 0-100";
    }
    if(number.value==random){
    text.textContent="you guessed correctly";
    }
    if(number.value>random){
        text.textContent="too high,guess again";
    }
    if(number.value<random){
        text.textContent="too low,guess again";
    }
}
