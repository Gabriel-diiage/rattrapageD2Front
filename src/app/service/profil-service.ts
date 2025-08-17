import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
    getProfile() {
    return {
      id: 1,
      name: 'arnaud',
      prenom: 'gab',
      age: 32,
      bio: 'Développeur passionné par Angular'
    };
  }
}
