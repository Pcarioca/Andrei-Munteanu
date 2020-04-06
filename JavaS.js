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
   //AICI AM INCERCAT, NU A IESIT :<
    // H=H*1;
    //H=Math.floor(H);
   // var inv=0;
   // var c=0;
   // while(H!=0){
   //     c=H%10;
   //     inv=c+inv;
   //     H=H/10;
   //
   //}
   //Asta e un algorintm pe care l-am gasit pe net care habar n-am ce face:))
   H = H + "";
    inv=H.split("").reverse().join("");

    
    document.getElementById("rezultatInvers").innerHTML=inv;
}