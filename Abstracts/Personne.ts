export default abstract class Personne {
    public age: number;
    public nom: string;

    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    /**
     * La personne se présente
     */
    sePresente(): void {
        console.log(`Bonjour, je suis ${this.nom} et j'ai ${this.age} ans.`);
    }
}
