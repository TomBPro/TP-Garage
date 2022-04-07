import Garage from "../Classes/Garage";

export default abstract class Vehicule {
    protected marque: string;
    garages?: Garage[];

    constructor(marque: string, garages?: Garage[]) {
        this.marque = marque;
        this.garages = garages;
    }

    /**
     * Méthode perso pour obtenir le type de véhicule
     */
    getType(): string {
        return typeof this;
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
