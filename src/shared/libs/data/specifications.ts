export type Specifications = {
  title: string;
  performance: string;
  testingMethods: string;
};

export const specifications: Specifications[] = [
  {
    title: 'Thickness',
    performance: '≥7.5mil',
    testingMethods: 'GBT/29061',
  },
  {
    title: 'Gloss(60°)',
    performance: '≥93',
    testingMethods: 'GB8807',
  },
  {
    title: 'Haze',
    performance: '≤2%',
    testingMethods: 'ASTM D1003',
  },
  {
    title: 'Modulus of elasticity (MOE)',
    performance: '≥180, ≤280',
    testingMethods: 'ASTM D-882',
  },
  {
    title: 'Elongation at break of repair layer',
    performance: '≥100%',
    testingMethods: 'ASTM D-882',
  },
  {
    title: 'Initial adhesive',
    performance: '15≤F≤20',
    testingMethods: 'FINAT3',
  },
  {
    title: 'Continuous adhesion',
    performance: '20≤F≤30',
    testingMethods: 'FINAT3',
  },
  {
    title: 'Hydrophobicity',
    performance: '>79,<90',
    testingMethods: 'GB/T 30693-2014',
  },
  {
    title: 'Stain resistance',
    performance: 'Slight residue',
    testingMethods: 'Marker pen - wipe with alcohol after air drying',
  },
  {
    title: 'Scratch resistance',
    performance: ' No scratch',
    testingMethods: '10 scrapes of a 200g/cm² loadbearing thin copper brush',
  },
  {
    title: 'Self-healing',
    performance: '≤ 5S',
    testingMethods:
      '10 scrapes of a 200g/cm² loadbearing thin copper brush Can be repaired with 70℃hot water or hot-blast air',
  },
  {
    title: 'Yellowing resistance and durability',
    performance: 'ΔE≤2 No breaks No bubbles',
    testingMethods: 'QUV ≥ 2800 hours',
  },
  {
    title: 'Acid and alkali resistance',
    performance: 'Normal',
    testingMethods:
      'Soak in HCl (pH 2-3) and NaOH (pH13-14) solution for 30 minutes',
  },
  {
    title: 'Rain spot resistance',
    performance: 'Traceless',
    testingMethods:
      'Affix the product to a painted board and expose on a rooftop for 15 days then wash with water',
  },
  {
    title: 'Warranty',
    performance: '10 years after installation',
    testingMethods: '',
  },
];
