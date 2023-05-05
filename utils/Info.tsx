export const site = {
  config: {
    title: 'EDC Planner',
    description: 'Rate your favorite artists from the EDC lineup.',
  },
  info: {
    short: 'EDC',
    long: 'Electric Daisy Carnival',
    year: '2023',
  },
};

export const landing = {
  text: {
    title: 'EDC Planner',
    subtitle: [
      'Pick your favorite artists',
      'Invite your squad',
      'Make a plan',
      'Rave',
    ],
  },
};

interface ILineup {
  name: string;
  stages: string[];
  sets: Array<{
    start: string;
    end: string;
  }>
}

export const lineup: ILineup[] = [
  {
    name: '12TH PLANET',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: '8KAYS',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: '999999999',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'A HUNDRED DRUMS',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ABANA',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ABOVE & BEYOND',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ACRAZE',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ACRAZE B2B NOIZU',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ADRENALIZE',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'AFROJACK (SUNRISE SET)',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'AK SPORTS',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ALISON WONDERLAND',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ALOK',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ANABEL ENGLUND',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ANDEN',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ANDY C',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ARMIN VAN BUUREN',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ARMNHMR',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ARTBAT',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ATDUSK',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'AUDIOFREQ',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'AZZECCA',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BAGGI',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BARELY ALIVE',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BEN NICKY PRESENTS EMOTIONAL HAVOC',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BEN NICKY PRESENTS XTREME B2B SUB ZERO PROJECT',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BEN UFO',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BENSLEY B2B JUSTIN HAWKES',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BILLY GILLIES',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BISCITS B2B MARTIN IKIN',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BLACK TIGER SEX MACHINE',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BLANKE',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BLASTOYZ',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BLEU CLAIR',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BOOGIE T',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BOOGIE T B2B DIRT MONKEY',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BORGORE B2B LEVEL UP',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BORIS BREJCHA',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BORN DIRTY',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'BRENNAN HEART',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CAMDEN COX',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CAPOZZI',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CAROLA',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CHAMPAGNE DRIP',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CHANEY',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CHRIS LAKE',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CHRIS LORENZO',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CID',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CID B2B SAGE ARMSTRONG',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CLOVERDALE',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'CODE BLACK',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'COONE',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'COSMIC GATE',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'D-STURB',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DA TWEEKAZ',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DANNY DAZE',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DARREN STYLES',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DAVID GUETTA',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DAVID MORALES',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DEADLY GUNS',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DEEPER PURPOSE',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DENNIS FERRER',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DEORRO',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DIMENSION',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DIONYSUS & YOSUF PRESENT: BIGGER, STRONGER, FASTER',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DISCO DOM',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DISCO LINES',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DJ ANIME',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DJ ISAAC',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DJ MINX',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DOM DOLLA',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DOMBRESKY',
    stages: [
      'kineticFIELD',
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DR PHUNK',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DUKE DUMONT',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'DUSTIN HUSAIN',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ELI BROWN',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ELIMINATE',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ELLEN ALLIEN',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ENAMOUR',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'EPTIC',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'EXCISION',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'EXCISION B2B DION TIMMER',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FALLEN B2B RICHTER with MC DINO',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FALLON',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FERRECK DAWN',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FERRY CORSTEN',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FISHER',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FRAME (DECLAN JAMES & DECODER)',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FRANKY WAH',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FRED EVERYTHING',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FRICTION',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FROSTTOP',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FUNTCASE',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'FURY B2B NIGHTSTALKER',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GALANTIS',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GAMMER B2B TWEEKACORE',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GARETH EMERY',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GARETH EMERY PRESENTS DECADES',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GENTLEMENS CLUB',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GIUSEPPE OTTAVIANI',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GOODBOYS',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GRIZ',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'GRIZTRONICS',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HABSTRAKT',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HANA',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HANNAH WANTS',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HINT OF LAVENDER',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HOL!',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HOT SINCE 82',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HUGEL',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'HVDES',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'I HATE MODELS',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'IMANU',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'J. WORRA',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JADED',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JAMES HYPE',
    stages: [
      'kineticFIELD',
      'cosmicMEADOW',
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JAMESJAMESJAMES',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JEFF MILLS',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JEROME ISMA-AE',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JOHN BRYARS',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JORZA',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JOSHWA',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'JSTJR',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KAIVON',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KALEENA ZANDERS',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KASKADE',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KASKADE REDUX',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KAYTRANADA',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KETTAMA',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KILL SCRIPT',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KOROLOVA',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'KREAM',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LADY FAITH',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LADY SINCLAIR',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LANE 8',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LAYLA BENITEZ',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LE YOUTH',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LENNY DEE',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LEVENKHAN',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LIL TEXAS',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LOCO DICE B2B FISHER',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LOUD LUXURY',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LOUIE VEGA',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'LOVEFINGERS + HEIDI LAWDEN',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MAARTEN DE JONG',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MALAA B2B WAX MOTIF',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MARC V',
    stages: [],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MARSHMELLO',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MARSHMELLO B2B SVDDEN DEATH',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MARTEN HØRGER',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MARTIN GARRIX',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MATRODA & FRIENDS',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MATT FAX',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MAU P',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MEDUZA',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MEMBA',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'METRIK B2B GRAFIX',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MIANE',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MICHAEL BIBI',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MIDNIGHT TYRANNOSAURUS',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MIKE DUNN',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MISS DRE',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MOCHAKK',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MODAPIT',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MOODY GOOD (THROWBACK SET)',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MORTEN',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MROTEK',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'MS. MADA B2B BAKKE',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'NALA',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'NETSKY',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'NOIZU',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'NOSTALGIX',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ODD MOB',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'OMAR SANTANA',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'PACO OSUNA',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'PATRICK TOPPING',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'PAUL DENTON',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'PAULINE HERR',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'PEEKABOO',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'PRETTY PINK',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'RAY VOLPE',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'REAPER',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'REBELION',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'REINIER ZONNEVELD (LIVE)',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'RIOT TEN B2B JESSICA AUDIFFRED',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ROB GEE 30 YEARS',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SAID THE SKY',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SALUTE',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SAN PACHO',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SAYMYNAME',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SHEI',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SHERELLE',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SHIP WREK',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SIDEPIECE',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SLANDER PRESENTS BEFORE DAWN',
    stages: [],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SOFTEST HARD',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SONNY FODERA',
    stages: [
      'cosmicMEADOW',
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SOREN',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SOUND RUSH',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SPACE LACES',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SPACE MOTION',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SPENCER BROWN',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SUAE',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SUB ZERO PROJECT',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SUBTRONICS',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SULLIVAN KING',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SULLIVAN KING B2B KAI WACHI',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SULTAN + SHEPARD',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'SVDDEN DEATH: INTO THE INFERNO',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TCHAMI B2B AC SLATER',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'THE MARTINEZ BROTHERS',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'THINGS YOU SAY',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TIËSTO',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TOBEHONEST',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TODD TERRY',
    stages: [
      'bionicJUNGLE',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TOM & COLLINS',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TOWNSHIP REBELLION',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TRIODE',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'TSU NAMI',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'VALENTINO KHAN',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'VINI VICI',
    stages: [
      'circuitGROUNDS',
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WARFACE',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WARFACE B2B D-STURB',
    stages: [
      'wasteLAND',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WAX MOTIF',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WESTEND',
    stages: [
      'stereoBLOOM',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WILL ATKINSON',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WILL CLARKE',
    stages: [
      'neonGARDEN',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'WOOLI',
    stages: [
      'bassPOD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'YELLOW CLAW',
    stages: [
      'circuitGROUNDS',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'YETEP',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-20T03:00:00.000Z',
        end: '2023-05-20T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'YOSHI & RAZNER',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'YOTTO',
    stages: [
      'quantumVALLEY',
    ],
    sets: [
      {
        start: '2023-05-22T03:00:00.000Z',
        end: '2023-05-22T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ZEDD',
    stages: [
      'kineticFIELD',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
  {
    name: 'ZEDS DEAD B2B CHASE & STATUS',
    stages: [
      'cosmicMEADOW',
    ],
    sets: [
      {
        start: '2023-05-21T03:00:00.000Z',
        end: '2023-05-21T04:00:00.000Z',
      },
    ],
  },
];
