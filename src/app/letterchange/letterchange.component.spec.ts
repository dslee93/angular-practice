import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterchangeComponent } from './letterchange.component';

describe('LetterchangeComponent', () => {
  let component: LetterchangeComponent;
  let fixture: ComponentFixture<LetterchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
