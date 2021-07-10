import { Component, Inject, OnInit } from '@angular/core';
import { Investigation } from './shared/investigation.model';
import { InvestigationComponentService } from './shared/investigation.service';


@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css']
})
export class InvestigationsComponent implements OnInit {

  public investigations: Investigation[];

  constructor(private service: InvestigationComponentService) {
  }

  ngOnInit() {
    this.service.getInvestigations()
      .subscribe(result => {
        this.investigations = result;
      }, error => console.error(error));
  }
}
