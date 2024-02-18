const time=document.getElementById("time")
    let ms=0;
    let s=0;
    let h=0;
    let m=0;
function start(){
    const addSecond = () => {
        ms += 10;
        if (ms >= 1000) {
            s++;
            ms -= 1000;
            }
        if (s > 59) {
                m++;
                s = 0;
                }
        if(m>59){
            h++
            m=0
        }
        h=h.toString().padStart(2,0)
        m=m.toString().padStart(2,0)
        s=s.toString().padStart(2,0);
    timestring=h+":"+m+":"+s
    time.innerText=timestring
    }
    set=setInterval(()=>{addSecond()}, 10);
    document.getElementById("start").disabled=true
}
function pause(){
    clearInterval(set)
    document.getElementById("start").disabled=false
}
function reset(){
    clearInterval(set)
    time.innerText="00:00:00"
    document.getElementById("start").disabled=false
}