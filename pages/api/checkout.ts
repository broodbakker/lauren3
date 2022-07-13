import { NextApiRequest, NextApiResponse } from 'next';
import { IProductCartServer } from '../../typescript';
import { mockProducts } from '../../util/mockdata';
// import { products } from '../../data/content.json';

const stripe = require('stripe');

const validateCartItems =
  require('use-shopping-cart/utilities').validateCartItems;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ statusCode: 405, message: 'Method not allowed' });
    return;
  }

  if (req.method === 'POST') {
    try {
      // Validate the cart details that were sent from the client.
      const line_items = validateCartItems(
        mockProducts,
        req.body as IProductCartServer
      );

      const secureStripe = stripe(process.env.STRIPE_SECRET_KEY);
      const session = await secureStripe.checkout.sessions.create({
        payment_method_types: ['card', 'ideal'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['NL', 'CA'],
        },
        mode: 'payment',
        success_url: `${process.env.URL}/succes`,
        cancel_url: 'http://localhost:3000',
        line_items,
      });

      res.status(200).json({
        id: session.id,
        statusCode: 200,
        message: 'payment successful',
      });
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ statusCode: 500, message: 'something went wrong' });
    }
  }
}
