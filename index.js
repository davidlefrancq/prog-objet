const {Gaufrier} = require('./bo/Gaufier.js')

// Tableau de Gaufier
const listGaufier = [];

// Fonction d'initialisation
function init() {
    const obj1 = new Gaufrier('seb',100,50,600);
    listGaufier.push(obj1);

    const obj2 = new Gaufrier('moulinex',150,45,2000);
    listGaufier.push(obj2);
}

// Exécution de l'init
init();

// Affichage
console.log(listGaufier);
console.log(listGaufier[0].getModel());

// Modification
listGaufier[0].setModel("jack");
console.log(listGaufier[0].getModel());

// Affichage du tableau modifier
console.log(listGaufier);

// Boucle de lecture / foreach
// for(const key in listGaufier){
//     gaufier = listGaufier[key];
//     console.log(gaufier.getModel());
// }


