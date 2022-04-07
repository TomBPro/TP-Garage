import MoteurThermique from "../Interfaces/MoteurThermique";
import Vehicule from "../Abstracts/Vehicule";

export default class MoteurDiesel implements MoteurThermique {
    vehicule: Vehicule;

    constructor(vehicule: Vehicule) {
        this.vehicule = vehicule;
    }

    faireLePlein(): void {
        console.log("Je fais le plein");
    }

    augmenterTours(): void {
        console.log("J'augmente des tours");
    }
}
