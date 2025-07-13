import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistory } from './education-history';

describe('EducationHistory', () => {
  let component: EducationHistory;
  let fixture: ComponentFixture<EducationHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
