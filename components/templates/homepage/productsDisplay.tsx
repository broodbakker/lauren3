//components
import Product from '../../product';
import CartProvider from '../../shared/cartProvider';
//typescript
import { Box, Heading } from '@chakra-ui/react';
import { IProduct } from '../../../typescript';
// import { fetchProducts } from "../../../util/api"
import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
//mockdata
import { mockProducts } from '../../../util/mockdata';
//functions
import { amountOfProducts } from "../../../util/functions";


export const ProductsDisplay = () => {
  const [products] = useState<IProduct[]>(amountOfProducts(4,mockProducts));

  useEffect(() => {
    // fetchProducts().then((products) => setValue(products.products));
  }, []);

  return (
    <>
      <Box textAlign="center">
        <Heading
          as="h2"
          fontWeight={600}
          color="blackAlpha.800"
          fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
        >
          Spulletjes die ik verkoop 🎁
        </Heading>
      </Box>
      {products && (
        <SimpleGrid columns={[1, 1, 2]} spacing={10} mt="10">
          <CartProvider>
            {products.map((product, key) => (
              <Product product={product} key={key} />
            ))}
          </CartProvider>
        </SimpleGrid>
      )}
    </>
  );
};
