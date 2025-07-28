import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './personal-data.html',
  styleUrl: './personal-data.css'
})
export class PersonalData {
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      // Present Address
      sameAsPresent: [false, Validators.required],
      presentAddress: ['', Validators.required],
      presentCity: ['', Validators.required],
      presentState: ['', Validators.required],
      presentZip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],

      // Mailing Address
      mailingAddress: [''],
      mailingCity: [''],
      mailingState: [''],
      mailingZip: ['']
    });
  }

   onSameAsPresentToggle() {
    if (this.applicationForm.get('sameAsPresent')?.value) {
      this.applicationForm.patchValue({
        mailingAddress: this.applicationForm.value.presentAddress,
        mailingCity: this.applicationForm.value.presentCity,
        mailingState: this.applicationForm.value.presentState,
        mailingZip: this.applicationForm.value.presentZip
      });

      // Optionally disable the mailing fields
      this.applicationForm.get('mailingAddress')?.disable();
      this.applicationForm.get('mailingCity')?.disable();
      this.applicationForm.get('mailingState')?.disable();
      this.applicationForm.get('mailingZip')?.disable();
    } else {
      // Clear values and enable fields
      this.applicationForm.get('mailingAddress')?.enable();
      this.applicationForm.get('mailingCity')?.enable();
      this.applicationForm.get('mailingState')?.enable();
      this.applicationForm.get('mailingZip')?.enable();
    }
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log('Form Submitted', this.applicationForm.value);
      // Proceed with submission logic (e.g., API call)
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }

}
