const {Gaufrier} = require('./bo/Gaufier.js')

const listGaufier = [];

function init() {
    const obj1 = new Gaufrier('seb',100,50,600);
    listGaufier.push(obj1);

    const obj2 = new Gaufrier('moulinex',150,45,2000);
    listGaufier.push(obj2);
}

init();

console.log(listGaufier);
console.log(listGaufier[0].getModel());
listGaufier[0].setModel("jack");
console.log(listGaufier[0].getModel());

console.log(listGaufier);

// for(const key in listGaufier){
//     gaufier = listGaufier[key];
//     console.log(gaufier.getModel());
// }


