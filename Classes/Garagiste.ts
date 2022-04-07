import Garage from "./Garage";
import Vehicule from "../Abstracts/Vehicule";
import Personne from "../Abstracts/Personne";

export default class Garagiste implements Personne{
    nom: string;
    age: number;
    garage?: Garage;

    constructor(nom: string, age: number, garage?: Garage){
        this.nom = nom;
        this.age = age;
        this.garage = garage;
    }

    sePresente() {
        if (this.garage) {
            console.log(`Je suis ${this.nom}, j'ai ${this.age} ans et je gère ce garage: ${this.garage.nom}`);
        } else {
            console.log(`Je suis ${this.nom}, j'ai ${this.age} ans et je n'ai pas de garage.`);
        }
    }

    /**
     * Permet au garagiste de conduire
     */
    conduire() {
        console.log("Je conduis");
    }

    /**
     * Affiche le garage du garagiste s'il en a un
     */
    presenterGarage() {
        console.log("Je présente mon garage");
    }

    /**
     * Permet au garagiste de faire le plein des voitures de son garage
     */
    faireLePleinDeToutesLesVoitures() {
        console.log("Je fais le plein de toutes les voitures");
    }
}
