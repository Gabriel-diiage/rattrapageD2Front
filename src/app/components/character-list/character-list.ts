import { Component, OnInit, Pipe, PipeTransform, Directive, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCard } from '../character-card/character-card'
import { CharacterService } from '../../service/character-service'
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterState, LoadCharacters } from '../../state/character-state';


@Pipe({ name: 'ageSuffix' })
export class AgeSuffixPipe implements PipeTransform {
  transform(value: number): string {
    return value + ' ans';
  }
}

@Pipe({ name: 'deNom' })
export class DeNomPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';  
    return 'De ' + value;
  }
}

@Directive({
  selector: '[appHighlightAge]'
})
export class HighlightAgeDirective implements OnInit {
  @Input() appHighlightAge!: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlightAge < 18) {
      this.el.nativeElement.style.color = 'red';
    }
  }
}


@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, AgeSuffixPipe, DeNomPipe, HighlightAgeDirective],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList implements OnInit {
  characters$!: Observable<Character[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.characters$ = this.store.select(CharacterState.characters);
    this.store.dispatch(new LoadCharacters());
  }

  reload() {
    this.store.dispatch(new LoadCharacters());
  }
}