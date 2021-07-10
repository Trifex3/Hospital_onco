import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Investigation, INVESTIGATION_TYPES } from "../../../shared/investigation.model";
import { InvestigationComponentService } from "../../../shared/investigation.service";

@Component({
  selector: 'app-investigation-edit',
  templateUrl: './investigation-edit.component.html',
})
export class AdminInvestigationEditComponent implements OnInit {
  @Input() investigation: Investigation;
  INVESTIGATION_TYPES = INVESTIGATION_TYPES;
  message: string;
  errorMessages: [];

  constructor(private investigationService: InvestigationComponentService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.investigationService.getInvestigation(params['id'])))
      .subscribe(investigation => {
        this.investigation = investigation
      });
  }

  save(): void {
  this.investigationService.update(this.investigation)
      .subscribe(
        () => {
          this.message = "Success!" 
          this.errorMessages = [];
        },
        error => this.errorMessages = error.error.errors
      );
  }

  goBack(): void {
    this.router.navigate(['/manage-investigations']);
  }

}
