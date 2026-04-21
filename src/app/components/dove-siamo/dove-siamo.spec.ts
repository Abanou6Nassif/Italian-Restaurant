import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveSiamo } from './dove-siamo';

describe('DoveSiamo', () => {
  let component: DoveSiamo;
  let fixture: ComponentFixture<DoveSiamo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoveSiamo],
    }).compileComponents();

    fixture = TestBed.createComponent(DoveSiamo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
