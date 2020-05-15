function move(pos){
    let photo = document.getElementById("img");
    photo.style.backgroundPosition = pos;
}

let ouvrir = document.getElementById("ouvrir");
let fermer = document.getElementById("fermer");
let fenetre;

ouvrir.addEventListener("click", function(){
    fenetre = window.open("https://clubs-isen-nantes.fr");
});


fermer.addEventListener("click", function(){
    fenetre.close();
});