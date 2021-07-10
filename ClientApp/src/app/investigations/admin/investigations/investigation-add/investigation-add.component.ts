import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Investigation, INVESTIGATION_TYPES } from '../../../shared/investigation.model';
import { InvestigationComponentService } from '../../../shared/investigation.service';

@Component({
  selector: 'app-investigation-add',
  templateUrl: './investigation-add.component.html',
})
export class AdminInvestigationAddComponent implements OnInit {
  @Input() investigation: Investigation = new Investigation();
  INVESTIGATION_TYPES = INVESTIGATION_TYPES;
  message: string;
  errorMessages: [];

  constructor(
    private service: InvestigationComponentService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void { }

  saveInvestigation() {
    this.service.save(this.investigation)
      .subscribe(
        () => {
          this.message = "Success!"
          this.errorMessages = [];
          this.investigation = new Investigation();
          this.cd.detectChanges();
        },
        error => this.errorMessages = error.error.errors
      );
  }
}
