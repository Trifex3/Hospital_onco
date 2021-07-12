//import { Component } from '@angular/core';

/*@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
}*/


import { Component, OnInit, OnDestroy } from '@angular/core';
/*import { Subscription } from 'rxjs';*/
import { Doctor } from '../doctors/shared/doctor';
import { DoctorComponentService } from '../doctors/shared/doctor.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*private subscription: Subscription = new Subscription();*/

  doctors: Doctor.DoctorResponse[] = null;

  constructor(private doctorService: DoctorComponentService) { }

  ngOnInit(): void {
    this.getAvailableDoctors();
  }

  getAvailableDoctors(): void {
    /*this.subscription.add(*/
      this.doctorService.getDoctors().subscribe(doctors => {
        this.doctors = doctors;
      })
    /*);*/
  }

  ngOnDestroy(): void {
    
  }
}
