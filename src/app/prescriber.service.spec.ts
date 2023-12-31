import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, tap } from 'rxjs';
import { prescriberData } from './prescriber';
import { PrescriberService } from './prescribers.service';
describe('PrescriberService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PrescriberService;
  const mockData = prescriberData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, PrescriberService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put']);
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
    httpClientSpy.put.and.returnValue(of(mockData[1]));
    service.updateData(mockData[1]).subscribe();
    expect(httpClientSpy.put).toHaveBeenCalledTimes(1);
  });
  it('should render correct data when search', () => {
    httpClientSpy.get.and.returnValue(of(mockData[0]));
    service
      .searchData(mockData[0].firstName)
      .pipe(tap((value) => expect(value).toBe(mockData[0])))
      .subscribe();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
