enum Agencies {
  Troyes,
  Compiegne,
  Belfort
}
export interface Contact {
  username: string;
  email: string;
  memberSince: string;
  id: number;
  agency: Agencies;
}

export const CONTACTS: Array<Contact> = [
  { id: 1, username: 'Pierre', email: 'pierre@example.com', memberSince: '2015-07-24', agency: Agencies.Belfort },
  { id: 2, username: 'Alexis', email: 'alexis@example.com', memberSince: '2016-05-24', agency: Agencies.Belfort  },
  { id: 3, username: 'Daniel', email: 'daniel@example.com', memberSince: '2017-09-24', agency: Agencies.Compiegne  },
  { id: 4, username: 'Endah', email: 'endah@example.com', memberSince: '2015-07-24', agency: Agencies.Belfort  },
  { id: 5, username: 'Séverine', email: 'severine@example.com', memberSince: '2015-07-24', agency: Agencies.Troyes  },
  { id: 6, username: 'Valentin', email: 'valentin@example.com', memberSince: '2015-07-24', agency: Agencies.Troyes  },
];

export const NEXT_ID = 7;
