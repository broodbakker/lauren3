//components
import { Layout } from '../../layout';
import { HeroHeading } from './heroHeading';
import HoeIkDingenMaak from "./hoeIkDingenMaak";
import { ImageGrid } from './imagesOfMyself';
import { ProductsDisplay } from './productsDisplay';

import { Box } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Layout>
      <>
        <HeroHeading />
        <ImageGrid />
        <Box my="12">
          <ProductsDisplay />
        </Box>
        <HoeIkDingenMaak />
      </>
    </Layout>
  );
};

export default HomePage;
