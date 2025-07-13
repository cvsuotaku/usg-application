import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDesired } from './employment-desired';

describe('EmploymentDesired', () => {
  let component: EmploymentDesired;
  let fixture: ComponentFixture<EmploymentDesired>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentDesired]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentDesired);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
