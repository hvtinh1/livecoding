import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material.module';
import { prescriberData } from '../prescriber';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let mockData = prescriberData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
    });
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render detail page title', () => {
    const h3ElementContext =
      fixture.nativeElement.querySelector('.mat-mdc-card-title').textContent;
    expect(h3ElementContext).toContain('Detail page');

  });

  it('should render correct data', () => {
    component.detail = mockData[0];
    fixture.detectChanges();
    const h3ElementContext =
      fixture.nativeElement.querySelector('h3').textContent;
    expect(h3ElementContext).toContain(mockData[0].firstName);
    expect(h3ElementContext).toContain(mockData[0].lastName);

  });
});
