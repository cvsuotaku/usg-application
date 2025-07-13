import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceHistory } from './residence-history';

describe('ResidenceHistory', () => {
  let component: ResidenceHistory;
  let fixture: ComponentFixture<ResidenceHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidenceHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidenceHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
