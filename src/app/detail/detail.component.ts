import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  debounceTime,
  map,
  mergeAll,
  mergeMap,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { IPrescriber } from '../prescriber';
import { PrescriberService } from '../prescribers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public detail!: IPrescriber;
  public inputData: string = '';
  public prescriberData: IPrescriber[] | undefined;
  public searchData: Subject<string> = new Subject();
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
            return pres.id.toString() === id;
          })[0]);
        })
      )
      .subscribe();
    this.prescriberService
      .getData()
      .pipe(
        tap((value) => {
          this.prescriberData = value;
        })
      )
      .subscribe();

    this.searchData
      .pipe(
        debounceTime(300),
        switchMap((value) => this.prescriberService.searchData(value)),
        tap((value) => (this.prescriberData = value))
      )
      .subscribe();
  }
  backToHome() {
    this.router.navigate(['']);
  }
  updateData() {
    const newPres = {
      ...this.detail,
      firstName: this.inputData,
    };
    console.log(this.detail, newPres);
    this.prescriberService
      .updateData(newPres)
      .subscribe((data) => console.log('data in after update'));
  }
  search(data: string) {
    this.searchData.next(data);
  }
}
