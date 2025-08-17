import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCharacter } from './ajout-character';

describe('AjoutCharacter', () => {
  let component: AjoutCharacter;
  let fixture: ComponentFixture<AjoutCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutCharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCharacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
