// import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import { fetchPostJSON } from '../api-helper';

export const usePayment = () => {
  const cart = useShoppingCart();
  const [count, setCount] = useState(cart.cartCount);

  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // const {
  //   cartDetails,
  //   cartCount,
  //   clearCart,
  //   addItem, loadCart
  // } = cart

  // const [state, setState] = useState<{
  //   status: 'idle' | 'fetching' | 'redirecting'
  //   error: null | number | Error
  // }>({ status: 'idle', error: null })

  // const fetchProducts = () =>
  //   fetch('/.netlify/functions/create-session', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(cartDetails)
  //   })
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .catch((error) => { return error })

  // async function handleCheckout() {
  //   const response = await fetchProducts()

  //   const stripe: any = await loadStripe(response.publishableKey);

  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: response.sessionId,
  //   });

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);
    // setErrorMessage('');

    const response = await fetchPostJSON('/api/checkout', cart.cartDetails);

    if (response.statusCode === 200) {
      setLoading(false);

      cart
        .redirectToCheckout(response.id)
        .catch(() =>
          setErrorMessage(
            'something went wrong with redirecting you to checkout. Try again please'
          )
        );

      return;
    }
    if (response.statusCode > 405) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    }

    if (response.statusCode > 500) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    } else {
      console.error(response.message);
      setErrorMessage('unknown error: try again');
      setLoading(false);
    }
  };

  return { handleCheckout, loading, errorMessage, cart, count };
};
