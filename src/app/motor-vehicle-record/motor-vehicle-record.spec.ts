import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorVehicleRecord } from './motor-vehicle-record';

describe('MotorVehicleRecord', () => {
  let component: MotorVehicleRecord;
  let fixture: ComponentFixture<MotorVehicleRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorVehicleRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorVehicleRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
