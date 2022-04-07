import Vehicule from "../Abstracts/Vehicule";
import Garage from "./Garage";

export default class Camion extends Vehicule{

    constructor(marque: string, garages?: Array<Garage>) {
        super(marque, garages);
    }

    /**
     * Permet d'attacher une remoque au camion
     */
    attacherRemorque() {
        console.log("J'attache une remorque");
    }

    /**
     * Permet de détacher la remorque du camion
     */
    detacherRemorque() {
        console.log("Je détache une remorque");
    }

    afficherVehicule(): void {
        console.log("Je suis un camion");
    }

    avancer(): void {
        console.log("Je fais avancer mon camion");
    }

    freiner(): void {
        console.log("Je freine mon camion");
    }

    reculer(): void {
        console.log("Je recule mon camion");
    }
}
