function getN(){
    var N= document.getElementById("input").value;
    var j=2
    var primes="Numerele sunt"+" ";
    while(N>0){
        var ok=1
        for(var i=2;i<=j/2;++i){
            if(j%i==0){ok=0;}
        }
        if(ok==1){
            --N;
            ++j;
            primes=primes+j;
        }
    }
    document.getElementById("result").innerHTML="Scriu aici orice ca sa confirm ca nu e problema cu algoritmul de mai sus:<";

}