import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CharacterList } from './components/character-list/character-list';
import { AjoutCharacter } from './components/ajout-character/ajout-character';
import { Profil } from './components/profil/profil';
import { NotFound } from './not-found/not-found'; // 404
import { NotFoundError } from 'rxjs';

export const routes: Routes = [
  // Redirection racine vers /characters
  { path: '', redirectTo: 'characters', pathMatch: 'full' },

  {
    path: '',
    children: [
      { path: 'characters', component: CharacterList },
      { path: 'profil/:id', component: Profil },
      { path: 'add', component: AjoutCharacter },
    ]
  },

  // 404 - Page Not Found
  /*{ path: '**', component: NotFound } */
  { path: '**', component: NotFoundError } // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
