function Toplama(){
    let s1=Number(document.getElementById("sayi1").value);
    let s2=Number(document.getElementById("sayi2").value);
    let sonuc=s1+s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}

function Cikarma(){
    let s1=Number(document.getElementById("sayi1").value);
    let s2=Number(document.getElementById("sayi2").value);
    let sonuc=s1-s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}

function Carpma(){
    let s1=Number(document.getElementById("sayi1").value);
    let s2=Number(document.getElementById("sayi2").value);
    let sonuc=s1*s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}

function Bolme(){
    let s1=Number(document.getElementById("sayi1").value);
    let s2=Number(document.getElementById("sayi2").value);
    let sonuc=s1/s2;
    document.getElementById("kutuSonuc").innerHTML="Sonuç : "+sonuc;
}