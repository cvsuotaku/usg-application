import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryServiceRecord } from './military-service-record';

describe('MilitaryServiceRecord', () => {
  let component: MilitaryServiceRecord;
  let fixture: ComponentFixture<MilitaryServiceRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryServiceRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilitaryServiceRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
