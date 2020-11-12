function getN(){
    var N= document.getElementById("input").value;
    N=N*1;
    var j=2;
    var primes="Numerele sunt"+" ";
    while(N>0){
        var ok=1
        for(var i=2;i<=j/2;++i){
            if(j%i==0){ok=0;}
        }
        if(ok==1){
            --N;
            primes=primes+" "+j+" ";
        }
        ++j;
    }
    document.getElementById("result").innerHTML=primes;

}
function invers(){
    var H= document.getElementById("invers").value;
  
   H = H + "";
    inv=H.split("").reverse().join("");

    
    document.getElementById("rezultatInvers").innerHTML=inv;
}
var c=1;
function start(){
    if(c==1){
        setTimeout(alertu, 10000);
    }
    document.getElementById("spam").innerHTML=c;
    c++;
}
function alertu(){
    var d=c-1;
    alert("Ai putut apasa de "+d+" ori in 10 secunde.");
    c=1;
    document.getElementById("spam").innerHTML="Apasa-ma de cate ori poti in 10 secunde";
}

document.getElementById("spam").addEventListener("click",start);