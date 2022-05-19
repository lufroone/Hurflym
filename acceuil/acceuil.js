/* fonction pour le survolage de la souris sur les lettres
    les fonctions enter pour quand la souris survole l'opacité est plus élevé et le texte change
    quand la souris s'en va c'est la fonction leave qui baisse l'opacité et et enlève le texte
    */

function A_enter(){
    const A = document.getElementById("A");
    A.style.filter = "contrast(1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "We will introduce you to metaverse.";
}

function A_leave(){
    const A = document.getElementById("A");
    A.style.filter = "contrast(0.1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "";
}


function K_enter(){
    const K = document.getElementById("K");
    K.style.filter = "contrast(1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "KATZ will invade world.";
}

function K_leave(){
    const K = document.getElementById("K");
    K.style.filter = "contrast(0.1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "";
}


function T_enter(){
    const T = document.getElementById("T");
    T.style.filter = "contrast(1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "We're gonna chill up.";
}

function T_leave(){
    const T = document.getElementById("T");
    T.style.filter = "contrast(0.1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "";
}

function Z_enter(){
    const Z = document.getElementById("Z");
    Z.style.filter = "contrast(1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "Get prepare for this.";
}

function Z_leave(){
    const Z = document.getElementById("Z");
    Z.style.filter = "contrast(0.1)";
    const p = document.getElementById("affichage");
    p.innerHTML = "";
}

