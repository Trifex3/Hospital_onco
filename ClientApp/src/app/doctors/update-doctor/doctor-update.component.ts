import { OnInit, OnDestroy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Doctor } from '../shared/doctor';
import { DoctorComponentService } from '../shared/doctor.service';
import { Investigation } from '../../investigations/shared/investigation.model';
import { InvestigationComponentService } from '../../investigations/shared/investigation.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class AdminDoctorUpdateComponent implements OnInit, OnDestroy {

  existingDoctor: Doctor.DoctorResponse;
  editedDoctor: Doctor.DoctorRequest;
  message: string;
  errorMessages: [];
  investigations: Investigation[];
  initialInvestigationIds: number[];
  updatedDoctorForm: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    privatedoctorService: DoctorComponentService,
    private route: ActivatedRoute,
    private location: Location,
    private serviceInvestigation: InvestigationComponentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDoctor();
    this.getAvailableInvestigations();
    this.initializeUpdateDoctorForm();
  }

/*  onFileChange(event): void {
    const reader: FileReader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.updateDoctorForm.patchValue({
          ProfileImage: reader.result
        });
      }
    }
  }*/

  initializeUpdateDoctorForm(): void {
    this.updatedDoctorForm = this.fb.group({
      Id: [null, Validators.required],
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Description: [null, Validators.required],
      ProfileImage: [null, Validators.required],
      Investigations: this.fb.array([] , Validators.required)
    })
  }

  getDoctor(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.doctorService.getDoctor(params['id'])))
      .subscribe(doctor => {
        if (doctor) {
          this.existingDoctor = doctor;

          this.id.setValue(this.existingDoctor.id);
          this.firstName.setValue(this.existingDoctor.firstName);
          this.lastName.setValue(this.existingDoctor.lastName);
          this.description.setValue(this.existingDoctor.description);
          this.initialInvestigationIds = this.existingDoctor.investigations.map(item => {
            this.selectedInvestigations.push(new FormControl(item));
            return item.id;
          });
        }
      });
  }

  getAvailableInvestigations(): void {
    this.serviceInvestigation.getInvestigations()
      .subscribe(result => {
        this.investigations = result;
      }, error => console.error(error));
  }

  get id(): FormControl {
    return this.updatedDoctorForm.get('Id') as FormControl;
  }

  get firstName(): FormControl {
    return this.updatedDoctorForm.get('FirstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.updatedDoctorForm.get('LastName') as FormControl;
  }

  get description(): FormControl {
    return this.updatedDoctorForm.get('Description') as FormControl;
  }

  get selectedInvestigations(): FormArray {
    return this.updatedDoctorForm.get('Investigations') as FormArray;
  }

  onChangeCheckboxState(event, investigation: Investigation): void {
    if (event.target.checked) {
      this.selectedInvestigations.push(new FormControl(investigation));
    } else {
      this.selectedInvestigations.controls.forEach((item: FormControl, index: number) => {
        if (item.value.id === investigation.id) {
          this.selectedInvestigations.removeAt(index);
          return;
        }
      });
    }
  }

  onSubmitForm(): void {
    this.editedDoctor = this.updatedDoctorForm.value;
    this.editedDoctor.Investigations = this.getUpdatedInvestigationIdsList();
    this.subscription.add(
      this.doctorService.update(this.existingDoctor.id, this.editedDoctor)
        .subscribe(confirmation => {
          this.message = "Success!"
          this.errorMessages = [];
          this.router.navigate(['/doctors']);
        },
          error => this.errorMessages = error.error.errors
        )
    );
  }

  private getUpdatedInvestigationIdsList(): number[] {
    return this.selectedInvestigations.controls.map(item => {
      this.selectedInvestigations.push(item);
      return item.value.id;
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
