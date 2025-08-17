import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Character } from '../models/character.model';
import { CharacterService } from '../service/character-service';
import { tap } from 'rxjs/operators';

export class LoadCharacters {
  static readonly type = '[Character] Load';
}

export class AddCharacter {
  static readonly type = '[Character] Add';
  constructor(public payload: Character) {}
}
export class LoadCharacter {
  static readonly type = '[Character] Load One';
  constructor(public id: number) {}
}

export interface CharacterStateModel {
  characters: Character[];
  selectedCharacter?: Character;
}

export interface CharacterStateModel {
  characters: Character[];
}

@State<CharacterStateModel>({
  name: 'characters',
  defaults: {
    characters: []
  }
})

@Injectable()
export class CharacterState {
  constructor(private characterService: CharacterService) {}

  @Selector()
  static characters(state: CharacterStateModel) {
    return state.characters;
  }

  @Selector()
  static selectedCharacter(state: CharacterStateModel) {
    return state.selectedCharacter;
  }

  @Action(LoadCharacters)
  load({ patchState }: StateContext<CharacterStateModel>) {
    return this.characterService.getCharacters().pipe(
      tap(chars => {
        patchState({ characters: chars });
      })
    );
  }

  @Action(AddCharacter)
  add({ getState, patchState }: StateContext<CharacterStateModel>, { payload }: AddCharacter) {
    const state = getState();
    patchState({ characters: [...state.characters, payload] });
    return this.characterService.addCharacter(payload); // optionnel: POST à l'API
  }

  @Action(LoadCharacter)
  loadOne({ patchState }: StateContext<CharacterStateModel>, { id }: LoadCharacter) {
    return this.characterService.getCharacter(id).pipe(
      tap(character => {
        patchState({ selectedCharacter: character });
      })
    );
  }
}

