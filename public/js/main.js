/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom
* - lieu
* - argent
* - mainDroite
* ( du coup main gauche)
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/

let personne = {
    
    nom: "Violette",
    lieu: "",
    argent: 30,
    mainDroite: "",
    mainGauche : "",
    seDeplacer(a){
        this.lieu = a
        console.log(`${this.nom} est à ${a.nom}`);
    },
    payerArticle(){

        for (let i = 0; i<this.mainDroite.contenu.length; i++ ){
            this.argent -= this.mainDroite.contenu[i].prix
        }

        
    },
    couper (a){
        this.mainDroite = couteau 
        console.log(`${this.nom} prend ${this.mainDroite.nom} pour ${this.mainDroite.action}`);
        for (let i=0; i<bol.contenu.length; i++){
            if (a[i].etat != "entier"){
                console.log(`${a[i].nom} est déjà coupé`);
            }else{
                a[i].etat = "coupé"
                console.log(`${a[i].nom} a été coupé avec ${this.mainDroite.nom}`);
            }
        }
        this.mainDroite = ""
        
    }
    
}
let couteau ={
    nom:"couteau",
    action: "coupé",
}

let maison = {
    nom: " la maison",
    personnes: [],
}



/**
 * Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
 */


/**
 * Créer un outil (couteau) pour découper les ingrédients achetés
 * propriétés : nom et action.
 * action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
 */


/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * attributs : nom, etats ( entier,coupé, moulu), prix
 */

class Ingrédient {
    constructor (nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let oignon = new Ingrédient ("oignon", "entier", 2);
let oeuf = new Ingrédient ("oeufs", "entier", 2);
let epice = new Ingrédient ("poivre", "moulu", 1);
let fromage = new Ingrédient ("fromage", "entier", 5);


// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (plusieurs objets paniers avec le type de panier et le contenu du panier),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.

let epicerie = {
    nom : "l'épicerie",
    personnes : [],
    panier: [
        panier1={
            nom: "panier1",
            contenu: []
        },
        panier2= {
            nom: "panier2",
            contenu: []
        }
    ],
    ingredients : [oignon, oeuf, epice, fromage],
}

/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */
let poele = {
    contenu : [],
    cuir (){
        setTimeout(()=>{
            this.contenu.push()
            this.contenu.etat = "cuite"
            console.log(`L'omelette est ${this.contenu.etat}!`);
        },4000)
    },
    
}


// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

let bol = {
    contenu : [],
    mixer (){
        for (let i=0; i<personne.mainDroite.contenu.length; i++){
            this.contenu.push(personne.mainDroite.contenu[i])
            console.log(`J'ai mis ${personne.mainDroite.contenu[i].nom} dans le bol`);
         }
         
         personne.mainDroite.contenu.splice(0,personne.mainDroite.contenu.length)
         console.log(`Parfait, mon panier est vide: ${personne.mainDroite.contenu}`);
 
        },
    melanger (){
        
        for (let i=0; i<this.contenu.length; i++){
            if (this.contenu[i].etat == "coupé" || this.contenu[i].etat == "moulu"){
                var newMelange = {
                    nom: "Omelette",
                    etat : "pas cuite"
                }               
            }else{  
            }
            
        }
        console.log(`J'ai maintenant dans mon bol: une ${newMelange.nom} mais elle n'est ${newMelange.etat}`);
        this.contenu = newMelange
    }
}


/**** DEBUT DE L'OMELETTE ****/
personne.seDeplacer(maison);
personne.seDeplacer (epicerie)




// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison (ok)


// Afficher un message tel que :
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu); (ok)


// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie (ok)


// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.) (ok)
// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
// console.log(`${personnage.nom} a pris un ${personnage.mainDroite.type}`); (ok)

personne.mainDroite = epicerie.panier[0];
epicerie.panier.shift();
console.log(`${personne.nom} a pris un ${personne.mainDroite.nom}`);
console.log(`Il reste donc ${epicerie.panier.length} panier dans le stock des paniers de ${epicerie.nom}`);


// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// Afficher un message à chaque ingrédient pris (ok)

for (let i=0; i < epicerie.ingredients.length; i++){
    personne.mainDroite.contenu.push(epicerie.ingredients[i])
    console.log(`${personne.nom} a pris ${personne.mainDroite.contenu[i].nom}`);
}


// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

personne.payerArticle();

console.log(`${personne.nom} a ${personne.argent} euros`);

// Afficher un message de ce qu'il reste d'argent sur le personnage. (ok)


// rentrer à la maison (comme ça on pourra cuisiner) (ok)
personne.seDeplacer(maison);

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)(ok!)
bol.mixer()



// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
// Afficher un petit message de chaque ingrédient qu'on met dans le bol. (ok)

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.) (ok)

// console.log(personne.mainDroite);
// Afficher un petit message (ok)
console.log(`Oups, j'ai oublié de laisser le panier à ${epicerie.nom}, j'y retourne vite avant qu'elle ferme!`);
personne.seDeplacer(epicerie);
epicerie.panier.push(personne.mainDroite)
console.log(`Il y a maintenant en ${epicerie.panier.length} paniers en stock  à ${epicerie.nom}`);
personne.mainDroite = ""
// console.log(personne.mainDroite);

// Retourner à la maison pour continuer l'omelette
personne.seDeplacer(maison)


// Afficher un petit message
console.log(`${personne.nom} peut continuer sa grande préparation culinaire maintenant qu'elle est rentrée.`);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage (ok)



// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).


// Afficher un message avec le nouveau mélange

personne.couper(bol.contenu);
bol.melanger()
console.log(`L'omelette est presque prête!`);

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

poele.contenu.push(bol.contenu)
bol.contenu = ""
// Afficher un message final, notre omelette est cuite :)
poele.cuir()