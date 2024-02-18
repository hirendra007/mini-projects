const display=document.getElementById("display");
function number(input){
    display.value+=input;   
}
function backspace() {
    var currentValue = display.value;
  
    if (currentValue.length === 0) {
      return;
    }
  
    display.value = currentValue.slice(0, -1);
  }

  function clearall(){
    display.value="";
  }
  function calculate(){
    display.value=eval(display.value)
  }
