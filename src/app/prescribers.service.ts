import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IPrescriber } from './prescriber';
@Injectable({
  providedIn: 'root',
})
export class PrescriberService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get<IPrescriber[]>('api/prescriber');
  }

  updateData(prescriber: IPrescriber) {
    return this.httpClient.post<IPrescriber>('api/prescriber', prescriber);
  }
}
