import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterCard } from '../character-card/character-card'
import { ProfilService } from '../../service/profil-service'

@Component({
  selector: 'app-profil',
  imports: [CommonModule, CharacterCard],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil implements OnInit {
  id_character!: number;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id_character = Number(this.route.snapshot.paramMap.get('id'));
  }
}
