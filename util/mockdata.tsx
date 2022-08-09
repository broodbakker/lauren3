const product1 = {
  name: 'zadel voor een paard',
  description: 'alleen zadel',
  id: '1',
  price: 100,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_46/v1660031579/lauren/debby-ledet-hz_hG6xnTh8-unsplash.jpg',
  ],
  currency: 'EUR',
  category: 'dekjes',
  sku: '1',
};

const product2 = {
  name: 'zwart zadel',
  description: 'leer',
  id: '2',
  price: 200,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_44/v1660031522/lauren/ashim-d-silva-RGFnUp2MUz8-unsplash.jpg',
  ],
  currency: 'EUR',
  category: 'dekjes',
  sku: '2',
};

const product3 = {
  name: 'paard die vrij is',
  description: 'met effect',
  id: '3',
  price: 300,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_39/v1660031529/lauren/pexels-pixabay-52500.jpg',
  ],
  currency: 'EUR',
  category: 'dekjes',
  sku: '3',
};

const product4 = {
  name: 'meerdere paarden',
  description: 'Yummy yellow fruit',
  id: '4',
  price: 400,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_32/v1660031566/lauren/fabian-burghardt-A81818EFqGQ-unsplash.jpg',
  ],
  currency: 'EUR',
  category: 'paarden',
  sku: '4',
};

const product5 = {
  name: 'paarden in  het wild',
  description: 'Yummy green fruit',
  id: '5',
  price: 500,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_39/v1660031529/lauren/pexels-pixabay-52500.jpg',
  ],
  currency: 'EUR',
  category: 'paarden',
  sku: '5',
};

const product6 = {
  name: 'paarden die vrij zijn',
  description: 'Yummy yellow fruit',
  id: '6',
  price: 600,
  image: [
    'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
  ],
  currency: 'EUR',
  category: 'paarden',
  sku: '6',
};

const product7 = {
  name: 'meerdere paarden',
  description: 'Yummy yellow fruit',
  id: '77',
  price: 700,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_37/v1660031557/lauren/jon-phillips-bReva9tPYAg-unsplash.jpg',
  ],
  currency: 'EUR',
  category: 'stallen',
  sku: '7',
};

const product8 = {
  name: 'paard met special effect',
  description: 'Yummy green fruit',
  id: '8',
  price: 800,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_33/v1660031532/lauren/ryan-yeaman-EIMgTi64vv8-unsplash.jpg',
  ],
  currency: 'EUR',
  category: 'stallen',
  sku: '8',
};

const product9 = {
  name: 'carrot',
  description: 'Yummy yellow fruit',
  id: '9',
  price: 900,
  image: [
    'https://res.cloudinary.com/dta9vptzh/image/upload/q_34/v1660031557/lauren/jon-phillips-bReva9tPYAg-unsplash.jpg',
  ],
  currency: 'EUR',
  category: 'stallen',
  sku: '9',
};

export const mockProducts = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
];

export const mockCheckoutCart = {
  1: {
    name: 'zadel voor een paard',
    description: 'alleen zadel',
    id: '1',
    price: 100,
    image: [
      'https://res.cloudinary.com/dta9vptzh/image/upload/q_46/v1660031579/lauren/debby-ledet-hz_hG6xnTh8-unsplash.jpg',
    ],
    currency: 'EUR',
    category: 'dekjes',
    sku: '1',
    value: 300,
    quantity: 3,
  },
  2: {
    name: 'zwart zadel',
    description: 'leer',
    id: '2',
    price: 200,
    image: [
      'https://res.cloudinary.com/dta9vptzh/image/upload/q_44/v1660031522/lauren/ashim-d-silva-RGFnUp2MUz8-unsplash.jpg',
    ],
    currency: 'EUR',
    category: 'dekjes',
    sku: '2',
    value: 800,
    quantity: 4,
  },
};
