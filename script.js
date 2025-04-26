const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let choixOrdinateur;
let resultat;

//Evenement 'Click sur les bouttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e)=>{
    //récuperation de l'ID du boutton cliqué 
    choixUtilisateur = e.target.id ;
    // on ajoute l'image qui corespond au choix 
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur()
    verification()
}));


// fonction pour generer le choix de l'ordinateur 

function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1 //Générer des nombre compris entre 1 et 3
    
    if(random === 1){// si random = à 1 :
        choixOrdinateur = "pierre"
    }

    if(random === 2){// si random = à 2 :
        choixOrdinateur = "papier"
    }

    if(random === 3){// si random = à 3 :
        choixOrdinateur = "ciseaux"
    }
    // on ajoute l'image qui corespond au choix 
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
    
}


// fonction pour verifier si le joueur a gagner ou pas 

function verification(){
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Egalité !";
    }
    // les cas ou le joueur perrd
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        resultat = "perdue !"
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
        resultat = "perdue !"
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "perdue !"
    }

    // les cas ou les joueur gagner

    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        resultat = "Gagné !"
    }

    contenantResultat.innerHTML = resultat;
} 