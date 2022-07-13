import { ReactNode } from 'react';
import { CartProvider as Cart } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Cart
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      currency="EUR"
    >
      <>{children}</>
    </Cart>
  );
};

export default CartProvider;
