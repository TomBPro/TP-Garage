import Vehicule from "../Abstracts/Vehicule";
import Garage from "./Garage";
import Moteur from "../Interfaces/Moteur";

export default class Moto extends Vehicule {

    constructor(marque: string, garage?: Garage, moteur?: Moteur) {
        super(marque, garage, moteur);
    }

    /**
     * Permet à la moto de faire un wheeling
     */
    faireUnWheeling() {
        console.log("Je fais un wheeling !!! C'est dingue !");
    }

    afficherVehicule(): void {
        console.log("Moto: " + this.marque);
    }

    avancer(): void {
        console.log("J'avance en moto !");
    }

    freiner(): void {
        console.log("Je freine en moto !");
    }

    reculer(): void {
        console.log("Je recule en moto !");
    }
}
