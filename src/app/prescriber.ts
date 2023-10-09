export interface IPrescriber {
  firstName: string;
  lastName: string;
  ahpraNumber: string | null;
  practitionerId: string | null;
  pharmacySystemId: number;
  doctorId: number;
}
export const prescriberData = [
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