import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { IPrescriber } from '../prescriber';
import { PrescriberService } from '../prescribers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public detail: IPrescriber | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prescriberService: PrescriberService
  ) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.prescriberService
      .getData()
      .pipe(
        map((value) => {
          return (this.detail = value.filter((pres) => {
            return pres.doctorId.toString() === id;
          })[0]);
        })
      )
      .subscribe();
  }
  backToHome() {
    this.router.navigate(['']);
  }
}
