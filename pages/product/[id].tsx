import ProductPage from '../../components/templates/productPage';

import { IProduct } from '../../typescript';
import { getProduct, getProductRoutes } from '../../util/functions/products';

import { mockProducts } from '../../util/mockdata';

interface IProductComponent {
  product: IProduct;
}

const Product = ({ product }: IProductComponent) => {
  return <ProductPage product={product} />;
};

export async function getStaticPaths() {
  // mockproducts
  const paths = getProductRoutes(mockProducts);

  return { paths, fallback: false };
}

type Params = {
  params: {
    category: string;
    id: string;
  };
};
// params will contain the id for each generated page.
export async function getStaticProps({ params: { id } }: Params) {
  const product = getProduct(id);

  return { props: { product } };
}

export default Product;
