import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../service/character-service'
import { Character } from '../../models/character.model';
import { Store, Select } from '@ngxs/store';
import { CharacterState, LoadCharacter } from '../../state/character-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.html',
  styleUrls: ['./character-card.css']
})
export class CharacterCard implements OnInit {
  @Input() id!: number;


  character$!: Observable<Character | undefined>;

  constructor(private store: Store) {}

  ngOnInit() {
    if (this.id) {
      this.store.dispatch(new LoadCharacter(this.id));
      this.character$ = this.store.select(CharacterState.selectedCharacter);
    }
  }
}