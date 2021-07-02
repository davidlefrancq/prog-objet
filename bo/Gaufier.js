class Gaufrier {

    model;
    argeur;
    hauteur;
    puissance;

    constructor(model, argeur, hauteur, puissance) {
        this.setModel(model);
        this.argeur = argeur;
        this.hauteur = hauteur;
        this.setPuissance(puissance);
    }

    getModel(){
        return this.model;
    }

    setModel(value){
        if(value != undefined && value != null){
            this.model = value;
        }
    }

    setPuissance(value){
        if(value > 2000){
            this.puissance = 2000;
        }else{
            this.puissance = value;
        }
    }


}

exports.Gaufrier = Gaufrier;
