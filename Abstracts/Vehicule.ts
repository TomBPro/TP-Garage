import Garage from "../Classes/Garage";
import Moto from "../Classes/Moto";
import Moteur from "../Interfaces/Moteur";

export default abstract class Vehicule {
    protected marque: string;
    garage?: Garage;
    moteur?: Moteur;

    constructor(marque: string, garage?: Garage, moteur?: Moteur) {
        this.marque = marque;
        this.garage = garage;
        this.moteur = moteur;
    }

    /**
     * Permet à la voiture d'avancer
     */
    abstract avancer(): void

    /**
     * Permet à la voiture de reculer
     */
    abstract reculer(): void

    /**
     * Permet à la voiture de freiner
     */
    abstract freiner(): void

    /**
     * Permet d'afficher le véhicule
     */
    abstract afficherVehicule(): void
}
