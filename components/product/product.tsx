import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
//typescript
import { IProduct } from '../../typescript';
//hooks
//function
import { formatPrice } from '../../util/functions';

interface IProductComponent {
  product: IProduct;
}

export const Product = ({ product }: IProductComponent) => {
  return <ProductView product={product} />;
};

const ProductView = ({ product }: IProductComponent) => {
  const { image, name, price } = product;
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="sm"
      mx="auto"
    >
      <Box
        bg="gray.300"
        h={64}
        w="full"
        rounded="lg"
        shadow="md"
        bgSize="cover"
        bgPos="center"
        pos="relative"
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 2,
          left: 0,
          zIndex: -1,
          backgroundImage: `url(${image[0]})`,
          filter: 'blur(15px)',
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
        style={{
          backgroundImage: `url(${image[0]})`,
        }}
      ></Box>

      <Box
        w={{
          base: 56,
          md: 64,
        }}
        pos="relative"
        mt={-10}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        _before={{
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 0,
          left: 0,
          bg: 'purple.600',
          opacity: 0.75,
        }}
      >
        <Heading
          as="h2"
          size="md"
          noOfLines={2}
          py={2}
          textAlign="center"
          fontWeight="bold"
          textTransform="uppercase"
          color="white"
          letterSpacing={1}
          pos="relative"
          zIndex={1}
        >
          {name}
        </Heading>

        <Flex alignItems="center" justifyContent="space-between" py={2} px={3}>
          <Text fontWeight="bold" color="white" zIndex={1}>
            {formatPrice(price)}
          </Text>
          <Link href={`/product/${product.name}`}>
            <a>
              <Button
                bg="gray.700"
                fontSize="xs"
                fontWeight="bold"
                color="white"
                px={2}
                py={1}
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: 'gray.700',
                  _dark: {
                    bg: 'gray.600',
                  },
                }}
                _focus={{
                  bg: 'gray.700',
                  _dark: {
                    bg: 'gray.600',
                  },
                  outline: 'none',
                }}
              >
                Bekijk product
              </Button>
            </a>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Product;
