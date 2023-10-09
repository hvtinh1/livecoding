import {  HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material.module';
import { prescriberData } from '../prescriber';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const prescriber = prescriberData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientModule, MatCardModule, MaterialModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.prescriber = prescriber;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should create title name', () => {
    fixture.detectChanges();
    const titleEl = fixture.nativeElement;
    const titleContent = titleEl.querySelector('.mat-mdc-card-title');
    expect(titleContent.textContent).toBe('Doctor list information');
  });

  it('should render the table title column name', () => {
    const mockData = [
      'Doctor Id',
      'First Name',
      'Last Name',
      'Ahpra number',
      'Practitioner Id',
      'Pharmacy System Id',
    ];
    fixture.detectChanges();
    const titleEl = fixture.nativeElement;
    const titleContent = titleEl.querySelectorAll('.mat-mdc-header-cell');
    mockData.map((data, i) => expect(titleContent[i].textContent).toBe(data));
  });
});
