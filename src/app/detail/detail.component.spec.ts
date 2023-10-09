import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
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
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
      ],
    });
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render detail page title', () => {
    const h3ElementContext = fixture.nativeElement.querySelector(
      '.mat-mdc-card-title'
    ).textContent;
    expect(h3ElementContext).toContain('Detail page');
  });

  it('should render correct detail data', () => {
    component.detail = mockData[0];
    fixture.detectChanges();
    const h3ElementContext =
      fixture.nativeElement.querySelector('h3').textContent;
    expect(h3ElementContext).toContain(mockData[0].firstName);
    expect(h3ElementContext).toContain(mockData[0].lastName);
  });

  it('should render correct data after init', () => {
    component.prescriberData = mockData;
    fixture.detectChanges();
    let testData: string[] = [];
    const h3ElementContext = fixture.nativeElement.querySelectorAll('tr');
    let count = 0;

    [...h3ElementContext].map((trElement: any, index: number) => {
      if (index === 0) return;
      testData = testData.concat(
        [...trElement.childNodes].reduce((x, y) => {
          return x.concat([y.innerText]);
        }, [])
      );
    });
    for (let i of Object.values(mockData)) {
      for (let j of Object.values(i)) {
        if (j === null) expect('').toBe(testData[count].toString());
        else expect(j.toString()).toBe(testData[count].toString());
        count++;
      }
    }
  });
});
