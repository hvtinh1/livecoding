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
        doctorId: 6,
      },
      {
        firstName: 'Paul',
        lastName: 'SINGH',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        doctorId: 24,
      },
      {
        firstName: 'BEST',
        lastName: 'LEE',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        doctorId: 11,
      },
      {
        firstName: 'Paul',
        lastName: 'GITANI',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        doctorId: 26,
      },
      {
        firstName: 'Kip',
        lastName: 'LEE',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        doctorId: 15,
      },
      {
        firstName: 'LOWE',
        lastName: 'Cape',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        doctorId: 1,
      },
      {
        firstName: 'MCADAMS',
        lastName: 'John',
        ahpraNumber: null,
        practitionerId: null,
        pharmacySystemId: 7777,
        doctorId: 3,
      },
    ];
    return {  prescriber };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: IPrescriber[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.doctorId)) + 1
      : 11;
  }
}
