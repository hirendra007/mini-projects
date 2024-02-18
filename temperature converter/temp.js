const text=document.getElementById("text");
const far=document.getElementById("far");
const cel=document.getElementById("cel");
const temp=document.getElementById("temp");
const btn=document.getElementById("btn");
function celsius(){
    f=temp.value ;
    result=((f-32)*(5/9));
    result=String(result.toFixed(2));
    text.textContent="celsius:"+result+"°C";
}
function fahrenheit(){
    c=temp.value;
    result=(c*(9/5)+32);
    result=String(result.toFixed(2));
    text.textContent="fahrenheit:"+result+" F";
}

function convert(){
    if (far.checked) {
        celsius();
    }
    else if (cel.checked) {
            fahrenheit();
            }
        
    else{
    alert("Please select a temperature type!")
}
}