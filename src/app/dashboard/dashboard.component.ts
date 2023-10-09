import { Component, OnInit } from '@angular/core';
import { PrescriberService } from '../prescribers.service';
import { tap } from 'rxjs';
import { IPrescriber } from '../prescriber';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private prescriberService: PrescriberService,
    private router: Router
  ) {}
  public prescriber: IPrescriber[] | undefined;
  public displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'ahpraNumber',
    'practitionerId',
    'pharmacySystemId',
  ];
  ngOnInit() {
    this.prescriberService
      .getData()
      .pipe(tap((value) => (this.prescriber = value)))
      .subscribe();
  }
  toDetailPage(id: string) {
    this.router.navigate(['detail', id]);
  }
}
