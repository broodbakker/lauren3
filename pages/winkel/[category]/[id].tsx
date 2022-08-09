// //typescript
import { IProduct } from '../../../typescript';
//constants
import {
  NUMBER_OF_PRODUCTS_PER_PAGE,
  PRODUCT_CATEGORIES,
} from '../../../util/constants';
//functions
import {
  formatPathWinkel,
  getProductsByCategory,
} from '../../../util/functions/products';
//data
import { mockProducts } from '../../../util/mockdata';
//components
import WinkelPage from '../../../components/templates/winkelPage';

interface IWinkel {
  products: IProduct[];
  category: string;
}

const Winkel = ({ products, category }: IWinkel) => {
  return <WinkelPage products={products} category={category} />;
};

export async function getStaticPaths() {
  // mockproducts
  const paths = formatPathWinkel(
    NUMBER_OF_PRODUCTS_PER_PAGE,
    PRODUCT_CATEGORIES,
    mockProducts
  );

  console.log(paths, 'paths');

  return { paths, fallback: false };
}

type Params = {
  params: {
    category: string;
    id: string;
  };
};
// params will contain the id for each generated page.
export async function getStaticProps({ params: { category } }: Params) {
  const products = getProductsByCategory(mockProducts, category);

  return { props: { products, category } };
}

export default Winkel;
