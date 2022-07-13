import { IProduct, IProductCart } from '../../typescript';
import { mockProducts } from '../../util/mockdata';

import { convertNumberToArrayOfNumbers } from './index';

export const getProductRoutes = (products: IProduct[]) =>
  products.map(formatPathProduct);

const formatPathProduct = ({ name }: IProduct) => ({ params: { id: name } });

export const formatPathWinkel = (
  numberOfProductPerPage: number,
  categories: string[],
  products: IProduct[]
) =>
  categories
    .map((category) => {
      const test = Math.ceil(
        getNumberOfProducts(products, category) / numberOfProductPerPage
      );
      return formatPathForWinkel(category, test);
    })
    .flat();

export const getNumberOfProducts = (products: IProduct[], category: string) =>
  products.filter((product) => product.category === category).length;

export const formatPathForWinkel = (category: string, number: number) =>
  convertNumberToArrayOfNumbers(number).map((num: number) => ({
    params: {
      category,
      id: (num + 1).toString(),
    },
  }));

export const getProduct = (productName: string): IProduct =>
  mockProducts.find((product) => product.name === productName);

export const ConvertProductDataForCart = (product: IProduct): IProductCart => ({
  ...product,
  image: product.image[0],
});

export const getProductsByCategory = (products: IProduct[], category: string) =>
  products.reduce((previousValue: IProduct[], currentValue) => {
    if (currentValue.category === category) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);
