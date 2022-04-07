import Vehicule from "../Abstracts/Vehicule";
import Moto from "./Moto";
import Voiture from "./Voiture";
import Camion from "./Camion";
import Garagiste from "./Garagiste";

export default class Garage {
    nom: string;
    vehicules?: Array<Vehicule> = [];
    garagistes?: Array<Garagiste> = [];

    constructor(nom: string, vehicules?: Array<Vehicule>, garagistes?: Array<Garagiste>) {
        this.nom = nom;
        this.vehicules = new Array<Vehicule>();
        this.garagistes = new Array<Garagiste>();
    }

    /**
     * Ajoute un véhicule
     * @param vehicule
     */
    ajouterVehicule(vehicule: Vehicule): void {
        this.vehicules?.push(vehicule);
        console.log(`Le véhicule a bien été ajouté au garage ${this.nom}`);
    }

    /**
     * Retire un véhicule
     * @param vehicule
     */
    retirerVehicule(vehicule: Vehicule): void {
        this.vehicules?.splice(this.vehicules.indexOf(vehicule), 1);
        console.log(`Le véhicule a été retiré du garage ${this.nom}`);
    }

    /**
     * Affiche le nom du garage
     */
    afficherGarage() {
        console.log(`Vous vous situez au Garage ${this.nom}`);
    }

    /**
     * Affiche les véhicules motos du garage
     */
    afficherMotos(): void {
        const motos = this.vehicules?.filter(vehicule => vehicule instanceof Moto);
        console.log(motos?.length)
        motos?.forEach(vehicule => {
            vehicule.afficherVehicule();
        });
    }

    /**
     * Affiche les véhicules automobiles du garage
     */
    afficherVoitures(): void {
        const voitures = this.vehicules?.filter(vehicule => vehicule instanceof Voiture);
        voitures?.forEach(vehicule => {
            vehicule.afficherVehicule();
        });
    }

    /**
     * Affiche les véhicules camions du garage
     */
    afficherCamions(): void {
        const camions = this.vehicules?.filter(vehicule => vehicule instanceof Camion);
        camions?.forEach(vehicule => {
            vehicule.afficherVehicule();
        });
    }
}
