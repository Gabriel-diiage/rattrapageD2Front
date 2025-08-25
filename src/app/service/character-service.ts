import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private local_characters: Character[] = [
  new Character(1, 'Arnaud', 'Gab', 15, 'Développeur passionné par Angular'),
  new Character(2, 'Garnier', 'Durand', 28, 'Graphiste et illustratrice freelance'),
  new Character(3, 'Dupond', 'Martin', 45, 'Chef de projet dans le secteur IT'),
  new Character(4, 'Lemoine', 'Lemoine', 35, 'Experte en marketing digital'),
  ];

  private apiUrl = 'https://localhost:7162/api/character';

  constructor(private http: HttpClient) {}

  getCharacter(id: number) {
    console.log(id)
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(data => new Character(
        data.id,
        data.nom,
        data.prenom,
        data.age,
        data.bio
      )))
  }

  getCharacters(): Observable<Character[]> {
    return of(this.local_characters);
  }

  addCharacter(character: Character): Observable<Character> {
    this.local_characters.push(character);
    return of(character);
  }


}
