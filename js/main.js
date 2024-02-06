console.log("Hello JS");

//commentaires :
    //commentaire de la lumière
    /*commentaire 
    des ténèbres*/


//variables :
    let chiffre = 2;
    const deux = 2;

    let animal = "chat";

    let isAlive = true;


//operateurs arithmétiques :
    let a = 2;
    let b = 3;
    let c = a + b;
    console.log(c);

    chiffre += 0.69;
    chiffre -= 1;
    console.log(chiffre);
    //voir support de cours pour le reste


//concaténation :
    let nom = "Helfer";
    let prenom = "Antoine";
    let nomComplet = prenom + " " + nom;
    console.log(nomComplet);

    //alternativement,
    prenom += " Helfer, toujours";
    console.log(prenom);

    prenom = "Antoine";


//interpolation :
    console.log(`Bonjour, je m'appelle ${prenom} ${nom}, soyez le/la bienvenu(e).`);


//operateurs de égalité/inégalité : 
    console.log("2 == '2' : " + (2 == "2")); //même valeur, peu importe le type ?
    console.log("2 === '2' : " + (2 === "2")); //même valeur, même type ?
    console.log("2 != '2' : " + (2 != "2")); //valeur différente ?
    console.log("2 !== '2' : " + (2 !== "2")); //valeur différente ou type different ?

//operateurs de comparaison :
    console.log("7 < 8 is : " + (7 < 8));
    console.log("7 <= 5 is : " + (7 <= 5));
    console.log("7 > 8 is : " + (7 > 8));
    console.log("7 >= 7 is : " + (7 >= 7));


//conditions :

    //operateurs logiques : && (AND), || (OR), et ! (NOT)
    console.log("true && true : " + (7 < 8 && 8 > 7)); // tout est vrai
    console.log("true && false : " + (7 < 8 && 8 < 7)); // tout n'est pas vrai
    console.log("true || false : " + (7 < 8 || 8 < 7)); // au moins un est vrai
    console.log("false || false : " + (7 > 8 || 8 < 7)); // rien n'est vrai, ma vie est un mensonge et mon monde s'écroule.

    console.log("not true : " + !(7 < 8)); //n'est pas vrai
    console.log("not false : " + !(7 > 8)); //n'est pas faux

    console.log("true || (true && false) : " + (true || (true && false))); // vrai
    console.log("(true || false) && false : " + ((true || false) && false)); // faux


    //operateur ternaire :
    let age = 20;
    console.log("John a 20 ans, il est " + (age >= 18 ? "majeur" : "mineur") + " en France.");
    console.log(`En revanche, John est ${age >= 21 ? "majeur" : "mineur"} aux USA.`);
    // ? (IF TRUE) instruction : (IF FALSE) autre instruction

    
    //blocs de conditions :

    //SI SINON :
    if (age >=18) {
        console.log("La personne est majeure.");
    } else {
        console.log("la personne est mineure.");
    }

    //SI SINON SI
    if (age >=21) {
        console.log("La personne est majeure aux USA.");
    } else if (age >= 18) {
        console.log("La personne est majeure en France.");
    } else {
        console.log("la personne est mineure.");
    }


    //SWITCH/CASE : 
    let heure = 12;

    switch (heure){
        case 10 :
            console.log("Je commence à avoir faim.");
            break;
        
        case 11 :
            console.log("Bientôt l'heure de manger.");
            break;
        
        case 12 :
            console.log("C'est l'heure de manger !");
            break;

        default : 
            console.log("Pas encore l'heure.");
            break;
    }

    //FOR
    //répète l'instruction de 1 à 10 inclu en incrémentant de 1 (10 fois)
    for (let i = 1; i <= 10; i++){
        console.log(`3 x ${i} = ${3*i}`);
    }
    //répète de 0 à 2 en incrémentant de 1 (3 fois)
    for (let i = 0; i < 3;i++){
        console.log("Je serais un bon développeur.");
    }
    //répète de 3 à 10, en incrémentant de 3 (3 fois)
    for (let i = 3; i <= 10; i += 3){
        console.log(`${i} est inferieur ou égal à 10 et divisible par 3.`);
    }
    //répète de 5 à 1 (0 exclu), en désincrémentant de 1 (5 fois)
    for (let i = 5; i > 0; i --){
        console.log(`${i} ...`);
    }
    console.log("Bonne année !");

    //WHILE
    let heure2 = 6;
    let timeTilLunch = 6;
    while (heure2 < 12){
        console.log(`il reste ${timeTilLunch} heures avant midi (j'ai faim).`);
        heure2 ++;
        timeTilLunch --;
    }
    console.log("C'est l'heure de manger !");


//fonctions : 

    //fonction simple avec retour
    function getNbrTimesThree (nb){
        return nb * 3;
    }
    const valeurRenvoyee = getNbrTimesThree(9);
    console.log(`resultat : ${valeurRenvoyee}`);

    //fonction simple sans retour
    function logMsgExclamation (phrase){
        console.log(`${phrase} !`);
    }
    logMsgExclamation ("J'ai faim");

    //fonction appelant d'autres fonctions
    function addTwoNbr (nb1, nb2){
        return nb1 + nb2;
    }
    function multTwoNbr (nb1, nb2){
        return nb1 * nb2;
    }
    function calculDeOuf (nb1, operation, nb2){
        switch (operation){
            case "addition" :
                return addTwoNbr (nb1, nb2);
            case "soustraction" :
                return addTwoNbr (nb1, -nb2);
            case "multiplication" :
                return multTwoNbr (nb1, nb2);
            case "division" : 
                return multTwoNbr (nb1, 1 / nb2);
            default :
                console.log(`Operation '${operation}' non gérée !`);
                return null;
        }
    }
    console.log(`6 + 9 = ${calculDeOuf (6, "addition", 9)}`);
    console.log(`6 - 9 = ${calculDeOuf (6, "soustraction", 9)}`);
    console.log(`6 * 9 = ${calculDeOuf (6, "multiplication", 9)}`);
    console.log(`6 / 9 = ${calculDeOuf (6, "division", 9)}`);
    console.log(`6 ** 9 = ${calculDeOuf (6, "puissance", 9)}`);


//Tableaux :

    //TABLEAUX INDEXES :

        
        const tableauVide = [];
        const tabNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

        //ajouter un élément (se rajoute auto à la fin du tableau)
        tableauVide.push(2);
        tableauVide.push(3);
        tableauVide.push(4);
        console.log("tableauVide = ", tableauVide);

        //récuperer un élément par son index
        console.log("élément à l'index 1 du tableau : ", tableauVide[1]);

        //modifier la valeur d'un élément à un index précis
        tableauVide[1] = "trois";
        console.log("tableauVide = ", tableauVide);

        //boucler sur un tableau
        for (let i = 0; i < tableauVide.length; i++){
            const elementTableauVide = tableauVide[i];
            console.log("tableauVide[" + i + "] : ", elementTableauVide);
        }

        //méthodes pour tableaux : 

        //.push (déjà vu plus haut)

        //.join : transforme le tableau en chaine et prends en paramètre un caractère de séparation
        console.log(`tabNums.join ( | ) = ${tabNums.join (" | ")}`);

        //.includes : retourne true/false si un élément est bien présent ou non dans le tableau
        console.log(
            `l'élément ${77} ${tabNums.includes(77) ? "est" : "n'est pas"} présent dans tabNums`
        );
        console.log(
            `l'élement ${12} ${tabNums.includes(12) ? "est" : "n'est pas"} présent dans tabNums`
        );

        //.indexOf : renvoie l'index de l'élément cherché
        const indexOf12 = tabNums.indexOf(12);
        if (indexOf12 != -1){
            console.log(`l'élément ${12} est à l'index ${indexOf12} dans tabNums`);
        } else {
            console.log(`l'élément ${12} n'est pas présent dans tabNums`);
        }

        //.slice : renvoie une copie des éléments aux indexes passés en paramètres
        const morceauTab = tabNums.slice (0, 4);
        console.log(`les 4 premières éléments de tabNums sont : [${morceauTab.join (", ")}]`);

    
    //TABLEAUX ASSOCIATIFS :
        
        //déclaration
        const tabAssoc = {};

        //ajout clé/valeur
        tabAssoc.prenom = "Antoine";
        tabAssoc.age = 25;

        console.log("tabAssoc = ", tabAssoc);

        //accéder à une valeur
        console.log(`je m'appelle ${tabAssoc.prenom}`);

        //modifier une valeur
        tabAssoc.age = 26;
        console.log("tabAssoc = ", tabAssoc);

        //tableau du rat jaune
        let pikachu = {
            id: 25,
            name: "Pikachu",
            weightKg: 6.0,
            hpMax: 80,
            attacks: [
                {
                    name: "vive-attaque",
                    damage: 10,
                },
                {
                    name: "boule elek",
                    damage: 20,
                }
            ]
        }
        console.log("pikachu = ",pikachu);

        //fonction pour lister les attaques d'un pokémon

        function listerAttaques (pokemon){
            //affichage initial
            console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);
            //de 0 à longeur tableau attacks (2) 
            for (let i = 0; i < pokemon.attacks.length; i++){
                //récupération du tableau de l'attaque
                const attaque = pokemon.attacks[i];
                console.log(`\t "${attaque.name}" (dmg : ${attaque.damage})`);
            }
        }

        listerAttaques(pikachu);
















