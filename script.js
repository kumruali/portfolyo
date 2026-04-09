let projeler=[

{
isim:"Blog Sitesi",
kategori:"web",
aciklama:"HTML ve CSS kullanılarak yapılmış kişisel blog sitesi."
},

{
isim:"E Ticaret Sitesi",
kategori:"web",
aciklama:"Ürün listeleme ve sepet sistemi içeren web projesi."
},

{
isim:"Mobil Todo Uygulaması",
kategori:"mobil",
aciklama:"Görev ekleme ve silme özellikli mobil uygulama."
},

{
isim:"Portfolyo Tasarım",
kategori:"web",
aciklama:"Kişisel projeleri sergilemek için hazırlanmış portfolyo sitesi."
},

{
isim:"Mobil Oyun",
kategori:"mobil",
aciklama:"Basit mekaniklere sahip eğlenceli bir mobil oyun."
}

]



function projeleriGoster(liste){

let alan=document.getElementById("projeAlani")

alan.innerHTML=""

liste.forEach(function(proje){

alan.innerHTML+=`

<div class="kart">

<h3>${proje.isim}</h3>

<p>Kategori : ${proje.kategori}</p>

<p>${proje.aciklama}</p>

</div>

`

})

}



projeleriGoster(projeler)



function filtrele(kategori){

if(kategori=="hepsi"){

projeleriGoster(projeler)

return

}

let filtrelenmisProjeler=

projeler.filter(function(proje){

return proje.kategori==kategori

})

projeleriGoster(filtrelenmisProjeler)

}



function temaDegistir(){

document.body.classList.toggle("dark")

}



let yazi="Ali Kumru Web Developer"

let i=0



function daktiloEfekti(){

if(i<yazi.length){

document.getElementById("daktilo").innerHTML+=yazi.charAt(i)

i++

setTimeout(daktiloEfekti,100)

}

}



daktiloEfekti()