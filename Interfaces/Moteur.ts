import Vehicule from "../Abstracts/Vehicule";

export default interface Moteur {
    vehicule: Vehicule;

    /**
     * Augmenter les tours du véhicule
     */
    augmenterTours(): void;
}
