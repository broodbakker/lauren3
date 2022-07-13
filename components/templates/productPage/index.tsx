//components
import { Layout } from '../../layout';
import CompleteProduct from './completeProduct';
//typescript
import { IProduct } from '../../../typescript';
import CartProvider from '../../shared/cartProvider';

interface IProductPage {
  product: IProduct;
}

const ProductPage = ({ product }: IProductPage) => {
  return (
    <Layout>
      <CartProvider>
        <CompleteProduct product={product} />
      </CartProvider>
    </Layout>
  );
};

export default ProductPage;
