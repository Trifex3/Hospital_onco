import { ChangeDetectorRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Component, ViewChildren, ViewChild, ElementRef, Renderer2  } from '@angular/core';
import { Doctor } from '../shared/doctor';
/*import { Subscription } from 'rxjs';*/
import { DoctorComponentService } from '../shared/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class AdminDoctorsListComponent implements OnInit, OnDestroy {

  @ViewChild('doctorsParent', { static: false }) domDoctorsParent: ElementRef;
  @ViewChildren('doctors') domDoctors: QueryList<any>;
  /* private subscription: Subscription = new Subscription();*/

  public doctorsList: Doctor.DoctorResponse[];

  message: string;
  errorMessages: [];

  constructor(
    private doctorsService: DoctorComponentService,
    private cd: ChangeDetectorRef,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  ngOnDestroy(): void {

  }

  addDoctor() {
    this.router.navigate(['/doctor/add']);
  }

  editDoctor(doctor: Doctor.DoctorResponse) {
    this.router.navigate(['/doctor/edit', doctor.id]);
  }

  getDoctors(): void {
    /*this.subscription.add(*/
    this.doctorsService.getDoctors()
      .subscribe(
        result => {
          this.doctorsList = result;
          this.errorMessages = [];
        },
        error => error.errorMessages = error.error.errors
      )
    /*);*/
  }

  deleteDoctor(doctorId: string): void {
    /* this.subscription.add(*/
    this.doctorsService.delete(doctorId)
      .subscribe(
        deleteConfirmation => {
          this.removeDoctorFromList(doctorId);
          this.message = "Success!"
          this.errorMessages = [];
        },
        error => this.errorMessages = error.error.errors
      )
    /* );*/
  }

  removeDoctorFromList(doctorId): void {
    let doctorToDelete = this.domDoctors.filter(element => {
      if (element.nativeElement.id == doctorId) {
        return element;
      }
    });

    if (doctorToDelete.length) {
      this.renderer.removeChild(this.domDoctorsParent.nativeElement, doctorToDelete[0].nativeElement);
    }


    
  }
}
