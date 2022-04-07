import Moteur from "./Moteur";

export default interface MoteurThermique extends Moteur {
    /**
     * Faire le plein du moteur thermique
     */
    faireLePlein(): void;
}
