//components
import { useRouter } from 'next/router';
import { Layout } from '../../layout';
import Pagination from '../../pagination';
import Product from '../../product';
//style
import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import { IProduct } from '../../../typescript';
import { PRODUCT_CATEGORIES } from '../../../util/constants';

import { Select } from 'chakra-react-select';

interface IWinkelPage {
  products: IProduct[];
  category: string;
}

const WinkelPage = ({ products, category }: IWinkelPage) => {
  console.log(products, 'products');

  const router = useRouter();

  const options = PRODUCT_CATEGORIES.map((categories) => ({
    label: categories,
    value: categories,
  }));

  const handleChange = (e: any) => {
    router.push(`/winkel/${e.value}/1`);
  };

  return (
    <Layout>
      <Box pt="10">
        <Center alignItems="center">
          <Box w="sm" mb="10">
            <Select
              defaultValue={{ label: category, value: category }}
              selectedOptionColor="purple"
              options={options}
              onChange={handleChange}
            />
          </Box>
        </Center>

        <Box mb="8">
          <Pagination
            category={products[0].category}
            amountOfProducts={products.length}
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={10} mt="10">
              {products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </SimpleGrid>
          </Pagination>
        </Box>
      </Box>
    </Layout>
  );
};

export default WinkelPage;
