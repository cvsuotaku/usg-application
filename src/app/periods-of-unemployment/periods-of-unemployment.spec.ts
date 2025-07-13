import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsOfUnemployment } from './periods-of-unemployment';

describe('PeriodsOfUnemployment', () => {
  let component: PeriodsOfUnemployment;
  let fixture: ComponentFixture<PeriodsOfUnemployment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodsOfUnemployment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodsOfUnemployment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
