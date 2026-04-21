import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Benvenuti } from './benvenuti';

describe('Benvenuti', () => {
  let component: Benvenuti;
  let fixture: ComponentFixture<Benvenuti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Benvenuti],
    }).compileComponents();

    fixture = TestBed.createComponent(Benvenuti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
