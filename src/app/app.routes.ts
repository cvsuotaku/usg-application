import { Routes } from '@angular/router';
import { PersonalData } from './personal-data/personal-data';
import { Agreement } from './agreement/agreement';
import { Certifications } from './certifications/certifications';
import { EducationHistory } from './education-history/education-history';
import { EmploymentDesired } from './employment-desired/employment-desired';
import { MilitaryServiceRecord } from './military-service-record/military-service-record';
import { MotorVehicleRecord } from './motor-vehicle-record/motor-vehicle-record';
import { PeriodsOfUnemployment } from './periods-of-unemployment/periods-of-unemployment';
import { ResidenceHistory } from './residence-history/residence-history';

export const routes: Routes = [
    { path: '', redirectTo: 'personal-data', pathMatch: 'full' },
    { path: 'personal-data', component: PersonalData },
    { path: 'employment-desired', component: EmploymentDesired },
    { path: 'military-service-record', component: MilitaryServiceRecord },
    { path: 'education-history', component: EducationHistory },
    { path: 'certifications', component: Certifications },
    { path: 'motor-vehicle-record', component: MotorVehicleRecord },
    { path: 'employment-history', component: PersonalData },
    { path: 'periods-of-unemployment', component: PeriodsOfUnemployment },
    { path: 'residence-history', component: ResidenceHistory },
    { path: 'agreement', component: Agreement }
];
