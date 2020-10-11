import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsSlideShowComponent } from './credits-slide-show.component';

describe('CreditsSlideShowComponent', () => {
  let component: CreditsSlideShowComponent;
  let fixture: ComponentFixture<CreditsSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsSlideShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
