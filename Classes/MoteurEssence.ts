import MoteurThermique from "../Interfaces/MoteurThermique";
import Vehicule from "../Abstracts/Vehicule";

export default class MoteurEssence implements MoteurThermique {
    vehicule: Vehicule;

    constructor(vehicule: Vehicule) {
        this.vehicule = vehicule;
    }

    augmenterTours(): void {
    }

    faireLePlein(): void {
    }

}
