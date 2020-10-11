import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPosterComponent } from './films-poster.component';

describe('FilmsPosterComponent', () => {
  let component: FilmsPosterComponent;
  let fixture: ComponentFixture<FilmsPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsPosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
