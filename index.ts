import Garage from "./Classes/Garage";
import Garagiste from "./Classes/Garagiste";
import Camion from "./Classes/Camion";
import Voiture from "./Classes/Voiture";
import Moto from "./Classes/Moto";
import MoteurElectrique from "./Classes/MoteurElectrique";
import MoteurDiesel from "./Classes/MoteurDiesel";
import MoteurEssence from "./Classes/MoteurEssence";

const ford = new Camion('Ford');
const fiesta = new Moto('Fiesta');
const mondeo = new Voiture('Mondeo');
const tesla = new Voiture('Tesla');

const garage = new Garage('IMM', [ford, fiesta, mondeo]);
const garagiste = new Garagiste('Jean', 19, garage);

const moteurElec = new MoteurElectrique(tesla);
const moteurDiesel = new MoteurDiesel(ford);
const moteurEssence = new MoteurEssence(mondeo);

moteurDiesel.faireLePlein();

moteurElec.recharger();
moteurElec.augmenterTours();

garagiste.sePresente();
garagiste.faireLePleinDeToutesLesVoitures();

fiesta.faireUnWheeling();

ford.attacherRemorque();

tesla.afficherVehicule();

garage.afficherGarage();

garage.ajouterVehicule(fiesta);
garage.ajouterVehicule(tesla);
garage.ajouterVehicule(mondeo);
garage.ajouterVehicule(ford);
garage.afficherGarage();

garage.afficherMotos();




