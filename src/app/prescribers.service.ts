import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPrescriber } from './prescriber';
@Injectable({
  providedIn: 'root',
})
export class PrescriberService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get<IPrescriber[]>('api/prescriber');
  }

  updateData(prescriber: IPrescriber): Observable<any> {
    console.log('in update');
    return this.httpClient
      .put('api/prescriber', {
        ...prescriber,
      })
      .pipe(tap((value) => console.log(value, '213213')));
  }

  removeData(prescriber: string): Observable<any> {
    return this.httpClient
      .delete<IPrescriber>(`api/prescriber/${prescriber}`)
      .pipe(tap((error) => console.log(error)));
  }
}
