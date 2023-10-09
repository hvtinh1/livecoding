import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {  prescriberData } from './prescriber';
import { PrescriberService } from './prescribers.service';
describe('PrescriberService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PrescriberService;
  const mockData = prescriberData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, PrescriberService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
    service = new PrescriberService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct data after get method', () => {
    httpClientSpy.get.and.returnValue(of(mockData));
    service.getData().subscribe((post) => expect(post).toBe(mockData));
  });
  it('should call get method one time', () => {
    httpClientSpy.get.and.returnValue(of(mockData));
    service.getData().subscribe();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should call post method one time', () => {
    httpClientSpy.post.and.returnValue(of(mockData[1]));
    service.updateData(mockData[1]).subscribe();
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  });

});
