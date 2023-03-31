// Manupilation du DOM
const score_joueur = document.getElementById("score_joueur");
const score_ordi = document.getElementById("score_ordi");

const pierre = document.getElementById("pierre");
const feuille = document.getElementById("feuille");
const ciseau = document.getElementById("ciseau");

const main_joueur = document.getElementById("main_joueur");
const issue = document.getElementById("issue");
const main_ordi = document.getElementById("main_ordi");

const btn_recommencer = document.getElementById("btn-recommencer");

// Initialisation des scores
let jScore = 0; // score du joueur
let oScore = 0;  // score du l'ordi

// Generation de la main de l'ordi, algoritme de l'issue, affichage
const jeu = (choix_joueur) =>{
    choix_ordi = Math.floor(Math.random() * 3);
 
  // Affichage de la main de l'ordi
    switch(choix_ordi){
        case 0:
            main_ordi.innerText = "👍";
            break;
        case 1:
            main_ordi.innerText = "👌";
            break;
        case 2:
            main_ordi.innerText = "✌";
            break;         
    }

    // algorithme d'issue  de l'ajoute
    switch(true) {
            case (choix_joueur == 0 && choix_ordi == 0) ||
            (choix_joueur == 1 && choix_ordi == 1) ||
            (choix_joueur == 2 && choix_ordi == 2):
            issue.innerText = "Egalité !";
            break;
            case (choix_joueur == 0 && choix_ordi == 1) ||
            (choix_joueur == 1 && choix_ordi == 2) ||
            (choix_joueur == 2 && choix_ordi == 0):
            issue.innerText = "Défaite !";
            oScore++;
            break;
            case (choix_joueur == 0 && choix_ordi == 2) ||
            (choix_joueur == 1 && choix_ordi == 0) ||
            (choix_joueur == 2 && choix_ordi == 1):
            issue.innerText = "Victoire !";
            jScore++;
            break;
    }

    // affichage des nouveaux score
    score_joueur.innerText = 'Votre score : ${jScore}';
    score_ordi.innerText = 'Score de ordi : ${oScore}';
};
// console.log(Math.floor(Math.random() * 3));
pierre.onclick = () =>{
    jeu(0);
    main_joueur.innerText = "👍";
};
feuille.onclick = () =>{
    jeu(1);
    main_joueur.innerText = "👌";
};
ciseau.onclick = () =>{
    jeu(2);
    main_joueur.innerText = "✌";
};

btn_recommencer.onclick = () =>{
    oScore = 0;
    jScore = 0;
    score_ordi.innerText = "Score de ordi : ${oScore}";
    score_joueur.innerText = "Votre score : ${jScore}";
    main_joueur.innerText = "";
    issue.innerText = "";
    main_ordi.innerText = "";
}
