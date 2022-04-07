import Vehicule from "../Abstracts/Vehicule";
import Garage from "./Garage";
import Moteur from "../Interfaces/Moteur";

export default class Voiture extends Vehicule {

    constructor(marque: string, garage?: Garage, moteur?: Moteur) {
        super(marque, garage, moteur);
    }

    afficherVehicule(): void {
        console.log("Voiture: " + this.marque);
    }

    avancer(): void {
        console.log(`La voiture avance`);
    }

    freiner(): void {
        console.log(`La voiture freine`);
    }

    reculer(): void {
        console.log(`La voiture recule`);
    }
}
