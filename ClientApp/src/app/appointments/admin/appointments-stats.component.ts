import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AppointmentStatsComponentService } from '../shared/appointments-stats.service';

@Component({
  selector: 'app-appointments-stats',
  templateUrl: './appointments-stats.component.html',
  styleUrls: ['./appointments-stats.component.css']
})
export class AppointmentsStatsComponent implements OnInit {
  constructor(
    private appointmentStatsService:AppointmentStatsComponentService,
    private cd: ChangeDetectorRef
  ) { }

  public appointmentScheduledInvestigationsStats = [];
  public popularInvestigationsStats = [];
  public popularDoctorsStats = [];

  public colours = [
    {
      backgroundColor: 'rgba(42, 95, 80,0.7)'
    }
  ]

  public chartOptions = {
    responsive: true,
    indexAxis: "y",
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
        }
      }]
    }
  }

  ngOnInit() {
    this.appointmentStatsService.getAppointmentScheduledInvestigationsStats().subscribe(result => {
      this.appointmentScheduledInvestigationsStats = result;
      this.cd.detectChanges();
    }, error => error => console.error(error));

    this.appointmentStatsService.getPopularDoctorsStats().subscribe(result => {
      this.popularDoctorsStats = result;
      this.displayrDoctorsStats();
      this.cd.detectChanges();
    }, error => error => console.error(error));

    this.appointmentStatsService.getPopularInvestigationsStats().subscribe(result => {
      this.popularInvestigationsStats = result;
      this.displayInvestigationsStats();
      this.cd.detectChanges();
    }, error => error => console.error(error));
  }

  investigationsChartData = [
    {
      label: 'Occupancy (%)',
      data: []
    }
  ];

  investigationsChartLabels = [];

  displayInvestigationsStats() {
    for (let item of this.popularInvestigationsStats) {
      this.investigationsChartData[0].data.push(parseInt(item.occupancyPercentage));
      this.investigationsChartLabels.push(item.investigationName);
    }
  }

  doctorsChartData = [
    {
      label: 'Occupancy (%)',
      data: []
    }
  ];

  doctorsChartLabels = [];

  displayrDoctorsStats() {
    for (let item of this.popularDoctorsStats) {
      this.doctorsChartData[0].data.push(parseInt(item.occupancyPercentage));
      this.doctorsChartLabels.push(item.doctorName);
    }
  }
}
