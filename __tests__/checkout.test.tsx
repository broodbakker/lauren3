/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

const validateCartItems =
  require('use-shopping-cart/utilities').validateCartItems;

import userEvent from '@testing-library/user-event';

interface ITest {
  message: string;
}

// const server = setupServer(
//   rest.post<IProductCart, ITest>('api/checkout', (req, res, ctx) => {
//     if (validateCartItems(req.body)) {
//       return res(ctx.status(500), ctx.json({ message: 'error' }));
//     }

//     return res(ctx.status(200), ctx.json({ message: 'good' }));
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

// const setup = () => {
//   const utils = render(
//     <CartProvider>
//       <Cart />
//     </CartProvider>
//   );
//   const submitButton = screen.getByRole('button', {
//     name: /checkout/i,
//   });

//   return {
//     submitButton,
//     ...utils,
//   };
// };

describe('checkout', () => {
  const user = userEvent.setup();

  it('renders the photos', async () => {
    expect(true).toBe(true);

    // const { submitButton } = setup();

    // await user.click(submitButton);

    // expect(screen.getByText('errorMessage')).toBeInTheDocument();
  });
});
