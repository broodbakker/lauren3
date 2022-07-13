const product1 = {
  name: 'Bananas',
  description: 'Yummy yellow fruit',
  id: '1',
  price: 400,
  image: [
    'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
  ],
  currency: 'EUR',
  category: 'stallen',
  sku: '2',
};

const product2 = {
  name: 'apple',
  description: 'Yummy green fruit',
  id: '3',
  price: 600,
  image: [
    'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
  ],
  currency: 'EUR',
  category: 'dekjes',
  sku: '4',
};

export const mockProducts = [product1, product2];

export const mockCheckoutCart = {
  1: {
    name: 'Bananas',
    description: 'Yummy yellow fruit',
    id: '1',
    price: 400,
    image: [
      'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
    ],
    currency: 'EUR',
    category: 'stallen',
    sku: '2',
    value: 1200,
    quantity: 3,
  },
  3: {
    name: 'apple',
    description: 'Yummy green fruit',
    id: '3',
    price: 600,
    image: [
      'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
    ],
    currency: 'EUR',
    category: 'dekjes',
    sku: '4',
    value: 2400,
    quantity: 4,
  },
};
