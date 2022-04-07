import Vehicule from "../Abstracts/Vehicule";
import Garage from "./Garage";

export default class Moto extends Vehicule {

    constructor(marque: string, garages?: Array<Garage>) {
        super(marque, garages);
    }

    /**
     * Permet à la moto de faire un wheeling
     */
    faireUnWheeling() {
        console.log("Je fais un wheeling !!! C'est dingue !");
    }

    afficherVehicule(): void {
        console.log("Je suis une moto");
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
