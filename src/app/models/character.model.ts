export class Character {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    bio: string;

    constructor(id: number = 0, nom: string, prenom: string, age: number, bio: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.bio = bio;
    }
}
