import Vehicule from "../Abstracts/Vehicule";

export default class Garage {
    nom: string;
    vehicules: Array<Vehicule>;

    constructor(nom: string, vehicules: Array<Vehicule>) {
        this.nom = nom;
        this.vehicules = new Array<Vehicule>();
    }

    /**
     * Ajoute un véhicule
     * @param vehicule
     */
    ajouterVehicule(vehicule: Vehicule): void {
        this.vehicules.push(vehicule);
        console.log(`Le véhicule ${vehicule} a bien été ajouté au garage ${this.nom}`);
    }

    /**
     * Retire un véhicule
     * @param vehicule
     */
    retirerVehicule(vehicule: Vehicule): void {
        this.vehicules.splice(this.vehicules.indexOf(vehicule), 1);
        console.log(`Le véhicule ${vehicule} a été retiré du garage ${this.nom}`);
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
        this.vehicules.forEach(vehicule => {
            if (vehicule.getType() === "Moto") {
                console.log('Moto: ' + vehicule);
            }
        });
    }

    /**
     * Affiche les véhicules automobiles du garage
     */
    afficherVoitures(): void {
        this.vehicules.forEach(vehicule => {
            if (vehicule.getType() === "Voiture") {
                console.log('Voiture: ' + vehicule);
            }
        });
    }

    /**
     * Affiche les véhicules camions du garage
     */
    afficherCamions(): void {
        this.vehicules.forEach(vehicule => {
            if (vehicule.getType() === "Camion") {
                console.log('Camion: ' + vehicule);
            }
        });
    }
}
