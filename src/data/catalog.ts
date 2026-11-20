export interface Product {
  id: string;
  name: string;
  short: string;
  when: string;
  photo: string;
}

export const sunfoldCatalog: Product[] = [
  { id: 'serum', name: 'Dew Drop Serum', short: 'Serum', when: 'Morning and evening', photo: 'sunfold-serum.jpg' },
  { id: 'night-cream', name: 'Slow Night Retinol Cream', short: 'Night Cream', when: 'Evening only', photo: 'sunfold-night-cream.jpg' },
  { id: 'cleanser', name: 'Milk Cleanser', short: 'Cleanser', when: 'Morning and evening', photo: 'sunfold-cleanser.jpg' },
];

export const plumeraCatalog: Product[] = [
  { id: 'serum', name: 'Velvet Hydra Serum', short: 'Serum', when: 'Morning and evening', photo: 'plumera-serum.jpg' },
  { id: 'night-cream', name: 'Night Renew Retinol Cream', short: 'Night Cream', when: 'Evening only', photo: 'plumera-night-cream.jpg' },
  { id: 'cleanser', name: 'Soft Gel Cleanser', short: 'Cleanser', when: 'Morning and evening', photo: 'plumera-cleanser.jpg' },
];
