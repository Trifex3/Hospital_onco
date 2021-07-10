import { ChangeDetectorRef, Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investigation } from '../../shared/investigation.model';
import { InvestigationComponentService } from '../../shared/investigation.service';


@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css']
})
export class AdminInvestigationsComponent implements OnInit {

  public investigations: Investigation[];

  constructor(private service: InvestigationComponentService, private router: Router) { }

  message: string;
  errorMessages: [];

  ngOnInit() {
    this.getInvestigations();
  }

  getInvestigations() {
    this.service.getInvestigations()
      .subscribe(
        (result) => {
          this.errorMessages = [];
          this.investigations = result;
        },
        error => this.errorMessages = error.error.errors
      );
  }

  addInvestigation() {
    this.router.navigate(['/investigation/add']);
  }

  editInvestigation(investigation: Investigation) {
    this.router.navigate(['/investigation/edit', investigation.id]);
  }

  deleteInvestigation(investigation: Investigation) {
    this.service.delete(investigation)
      .subscribe(
        () => {
          this.message = "Success!"
          this.errorMessages = [];
          this.investigations = this.investigations.filter(i => i.id !== investigation.id);
        },
        error => this.errorMessages = error.error.errors
      );
  }

  /*getPrimaryColourHex(activity: Activity) {
    const colour = activity.primaryColour;

    return colour.startsWith('#') ? colour : '#' + colour;
  }

  getSecondaryColourHex(activity: Activity) {
    const colour = activity.secondaryColour;

    return colour.startsWith('#') ? colour : '#' + colour;
  }*/
}
