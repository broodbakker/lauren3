//components
import { Layout } from '../../layout';
import CartProvider from '../../shared/cartProvider';
import { Cart } from './cart';
const WinkelmandjePage = () => {
  return (
    <Layout>
      <CartProvider>
        <Cart />
      </CartProvider>
    </Layout>
  );
};

export default WinkelmandjePage;
