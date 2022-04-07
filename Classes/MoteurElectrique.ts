import Moteur from "../Interfaces/Moteur";
import Vehicule from "../Abstracts/Vehicule";

export default class MoteurElectrique implements Moteur {
    vehicule: Vehicule;

    constructor(vehicule: Vehicule) {
        this.vehicule = vehicule;
    }

    /**
     * Recharge le moteur électrique
     */
    recharger() {
        console.log("Je recharge le moteur electrique");
    }

    augmenterTours(): void {
        console.log(`J'augmente les tours de mon moteur electrique`);
    }
}
