import { error } from '@angular/compiler/src/util';
import { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
/*import { Subscription } from 'rxjs';*/
import { Investigation } from '../../investigations/shared/investigation.model';
import { InvestigationComponentService } from '../../investigations/shared/investigation.service';
import { Doctor } from '../shared/doctor';
import { DoctorComponentService } from '../shared/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class AdminDoctorAddComponent implements OnInit, OnDestroy {

  message: string;
  errorMessages: [];

  /*private subscription: Subscription = new Subscription();
*/
  newDoctor: Doctor.DoctorRequest;
  addDoctorForm: FormGroup;
  investigations: Investigation[];

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorComponentService,
    private serviceInvestigation: InvestigationComponentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceInvestigation.getInvestigations()
      .subscribe(result => {
        this.investigations = result;
      }, error => console.error(error));

    this.initForm();
  }

  initForm() {
    this.addDoctorForm = this.fb.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Description: [null, Validators.required],
      ProfileImage: [null, Validators.required],
      Investigations: this.fb.array([], Validators.required)
    });
  }

  get selectedInvestigations(): FormArray {
    return this.addDoctorForm.get(' Investigations') as FormArray;
  }

  onFileChange(event): void {
    const reader: FileReader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.addDoctorForm.patchValue({
          ProfileImage: reader.result
        });
      }
    }
  }

  onChangeCheckboxState(event, investigation: Number): void {
    if (event.target.checked) {
      this.selectedInvestigations.push(new FormControl(investigation));
    } else {
      this.selectedInvestigations.controls.forEach((item: FormControl, index: number) => {
        if (item.value.id === investigation) {
          this.selectedInvestigations.removeAt(index);
          return;
        }
      });
    }
  }

  onSubmitForm(): void {
    this.newDoctor = this.addDoctorForm.value;
    /*this.subscription.add(*/
    this.doctorService.save(this.newDoctor)
      .subscribe(confirmation => {
        this.message = "Success!"
        this.errorMessages = [];
        this.initForm();
        this.router.navigate(['/doctors']);
      },
        error => this.errorMessages = error.error.errors
      )
    /*);*/
  }


ngOnDestroy(): void {
  
}
  }

/*const checkedResults = Object.keys(this.addDoctorForm.value).filter(prop => {
  if (this.addDoctorForm.value[prop] !== null) {
    return this.addDoctorForm.value[prop]
      }
    })
    console.log(checkedResults);
*/
