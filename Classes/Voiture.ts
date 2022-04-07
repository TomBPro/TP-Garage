import Vehicule from "../Abstracts/Vehicule";
import Garage from "./Garage";

export default class Voiture extends Vehicule {

    constructor(marque: string, garages?: Array<Garage>) {
        super(marque, garages);
    }

    afficherVehicule(): void {
        console.log(`La voiture est une voiture`);
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
