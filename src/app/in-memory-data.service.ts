import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IPrescriber } from './prescriber';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const prescriber = [
      {
        firstName: 'James',
        lastName: 'BEST',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 6,
      },
      {
        firstName: 'Paul',
        lastName: 'SINGH',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 24,
      },
      {
        firstName: 'BEST',
        lastName: 'LEE',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 11,
      },
      {
        firstName: 'Paul',
        lastName: 'GITANI',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 26,
      },
      {
        firstName: 'Kip',
        lastName: 'LEE',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 15,
      },
      {
        firstName: 'LOWE',
        lastName: 'Cape',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 1,
      },
      {
        firstName: 'MCADAMS',
        lastName: 'John',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        id: 3,
      },
    ];
    return {  prescriber };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(prescriber: IPrescriber[]): number {
    return prescriber.length > 0
      ? Math.max(...prescriber.map((pres) => pres.id)) + 1
      : 11;
  }
}
