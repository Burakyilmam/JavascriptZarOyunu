function zarla() {
    var randomSayi1 = Math.ceil(Math.random()*6);
    var randomSayi2 = Math.ceil(Math.random()*6);
    
    if(randomSayi1 == 1){
        document.getElementById("zar1").src = "png/zar 1.png";
    }
    else if(randomSayi1 == 2){
        document.getElementById("zar1").src = "png/zar 2.png";
    }
    else if(randomSayi1 == 3){
        document.getElementById("zar1").src = "png/zar 3.png";
    }
    else if(randomSayi1 == 4){
        document.getElementById("zar1").src = "png/zar 4.png"; 
    }
    else if(randomSayi1 == 5){
        document.getElementById("zar1").src = "png/zar 5.png"; 
    }
    else if(randomSayi1 == 6){
        document.getElementById("zar1").src = "png/zar 6.png"; 
    }

    if(randomSayi2 == 1){
        document.getElementById("zar2").src = "png/zar 1.png";
    }
    else if(randomSayi2 == 2){
        document.getElementById("zar2").src = "png/zar 2.png";
    }
    else if(randomSayi2 == 3){
        document.getElementById("zar2").src = "png/zar 3.png";
    }
    else if(randomSayi2 == 4){
        document.getElementById("zar2").src = "png/zar 4.png"; 
    }
    else if(randomSayi2 == 5){
        document.getElementById("zar2").src = "png/zar 5.png"; 
    }
    else if(randomSayi2 == 6){
        document.getElementById("zar2").src = "png/zar 6.png"; 
    }

    var birincioyuncuzar1 = randomSayi1;
    var birincioyuncuzar2 = randomSayi2;

    document.getElementById("birincioyuncu").innerHTML = randomSayi1 + " " + randomSayi2;  

    randomSayi1 = Math.ceil(Math.random()*6);
    randomSayi2 = Math.ceil(Math.random()*6);

    if(randomSayi1 == 1){
        document.getElementById("zar3").src = "png/zar 1.png";
    }
    else if(randomSayi1 == 2){
        document.getElementById("zar3").src = "png/zar 2.png";
    }
    else if(randomSayi1 == 3){
        document.getElementById("zar3").src = "png/zar 3.png";
    }
    else if(randomSayi1 == 4){
        document.getElementById("zar3").src = "png/zar 4.png"; 
    }
    else if(randomSayi1 == 5){
        document.getElementById("zar3").src = "png/zar 5.png"; 
    }
    else if(randomSayi1 == 6){
        document.getElementById("zar3").src = "png/zar 6.png"; 
    }

    if(randomSayi2 == 1){
        document.getElementById("zar4").src = "png/zar 1.png";
    }
    else if(randomSayi2 == 2){
        document.getElementById("zar4").src = "png/zar 2.png";
    }
    else if(randomSayi2 == 3){
        document.getElementById("zar4").src = "png/zar 3.png";
    }
    else if(randomSayi2 == 4){
        document.getElementById("zar4").src = "png/zar 4.png"; 
    }
    else if(randomSayi2 == 5){
        document.getElementById("zar4").src = "png/zar 5.png"; 
    }
    else if(randomSayi2 == 6){
        document.getElementById("zar4").src = "png/zar 6.png"; 
    }

    var ikincioyuncuzar1 = randomSayi1;
    var ikincioyuncuzar2 = randomSayi2;

    document.getElementById("ikincioyuncu").innerHTML = randomSayi1 + " " + randomSayi2;

    if(birincioyuncuzar1 + birincioyuncuzar2 < ikincioyuncuzar1 + ikincioyuncuzar2){
        document.getElementById("btn").style.display = "none";
        setTimeout(function yönlendir(){
            window.location.href = "İkinciOyuncuKazandı.html";
        },1500);
    }
    else if(birincioyuncuzar1 + birincioyuncuzar2 > ikincioyuncuzar1 + ikincioyuncuzar2){
        document.getElementById("btn").style.display = "none";
        setTimeout(function yönlendir(){
            window.location.href = "BirinciOyuncuKazandı.html";
        },1200);
    }
    else
    {
        document.getElementById("btn").style.display = "none";
        setTimeout(function yönlendir(){
            window.location.href = "Berabere.html";
        },1200);
    }
    toplam = birincioyuncuzar1 + birincioyuncuzar2;
    document.getElementById('kazanan').innerHTML = toplam;
}  