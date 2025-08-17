import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // <- FormGroup ajouté
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { CharacterState, AddCharacter } from '../../state/character-state';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-ajout-character',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-character.html',
  styleUrls: ['./ajout-character.css']
})
export class AjoutCharacter implements OnInit {
  addCharacterForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.addCharacterForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      age: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
      bio: ['']
    });
  }

  onSubmit() {
    if (this.addCharacterForm.valid) {
      const formValue = this.addCharacterForm.getRawValue();
      const newCharacter: Character = {
        id: Date.now(),
        nom: formValue.nom || '',
        prenom: formValue.prenom || '',
        age: formValue.age || 0,
        bio: formValue.bio || ''
      };

      this.store.dispatch(new AddCharacter(newCharacter));
      console.log('Données envoyées :', newCharacter);
      this.addCharacterForm.reset();
    } else {
      console.log('Formulaire invalide');
    }
  }
}
