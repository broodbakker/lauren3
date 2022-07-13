import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
//typescript
import { IProduct } from '../../../typescript';
//function
import {
  ConvertProductDataForCart,
  formatPrice,
} from '../../../util/functions';
//components
import ImageSlider from '../../shared/imageSlider';
import Counter from './counter';
// import { usePayment } from '../util/hooks/usePayment';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';

interface ICompleteProduct {
  product: IProduct;
}

const CompleteProduct = ({ product }: ICompleteProduct) => {
  const router = useRouter();
  const { addItem, setItemQuantity } = useShoppingCart();

  const [amount, setAmount] = useState(1);
  const [addedProduct, setHasAddedProduct] = useState({
    quantity: 0,
    hasAdded: false,
  });

  const handleClick = () => {
    addItem(ConvertProductDataForCart(product));

    setItemQuantity(product.id, amount);
    setHasAddedProduct({ quantity: amount, hasAdded: true });
    router.reload();
  };

  const handleClose = () =>
    setHasAddedProduct({ quantity: 0, hasAdded: false });

  return (
    <CompleteProductView
      product={product}
      handleClick={handleClick}
      setAmount={setAmount}
      addedProduct={addedProduct}
      handleClose={handleClose}
    />
  );
};

interface ICompleteProductView extends ICompleteProduct {
  product: IProduct;
  setAmount: Dispatch<SetStateAction<number>>;
  handleClick: () => void;
  addedProduct: {
    quantity: number;
    hasAdded: boolean;
  };
  handleClose: () => void;
}

const content = {
  buttonText: 'Leg in mandje',
  titleByHetAfrekenen: 'De producten liggen nu in uw mandje',
  aantal: (quantity: number) => `aantal: ${quantity}`,
  totalePrijs: (quantity, price) =>
    ` ${' '}totale prijs:${' '}${formatPrice(quantity * price)}`,
  buttonKassa: 'Ga door naar de kassa',
  buttonDoorgaan: 'Ga door met shoppen',
};

const CompleteProductView = ({
  product,
  setAmount,
  handleClick,
  addedProduct,
  handleClose,
}: ICompleteProductView) => {
  return (
    <Flex justify="center" align="center" minH="60vh">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width="100%"
        maxW={['600px', '600px', '700px']}
      >
        <Flex flex={1}>
          <ImageSlider images={product.image} />
        </Flex>
        <Flex p={[0, 4, 8]} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'purple.400',
                  zIndex: -1,
                }}
              >
                {product.name}
              </Text>
            </Heading>
            <Text mt={0} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {product.description}
            </Text>

            <Text
              fontSize={{ base: 'lg', lg: 'xl' }}
              fontWeight="bold"
              color={'gray.800'}
            >
              {formatPrice(product.price)}
            </Text>

            {!addedProduct.hasAdded && (
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Counter setAmount={setAmount} />
                <Button
                  onClick={handleClick}
                  colorScheme="purple"
                  fontSize="sm"
                  fontWeight="bold"
                  color="white"
                  size="lg"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _focus={{
                    bg: 'purple.700',
                    _dark: {
                      bg: 'purple.600',
                    },
                    outline: 'none',
                  }}
                >
                  {content.buttonText}
                </Button>
              </Stack>
            )}

            {addedProduct.hasAdded && (
              <Box
                border="1px"
                borderColor="purple.600"
                borderRadius="2"
                bg="purple.50"
                p="2"
              >
                <Heading as="h2" size="md" mb="2">
                  {content.titleByHetAfrekenen}
                </Heading>
                <p>{content.aantal(addedProduct.quantity)}</p>
                <p>
                  {content.totalePrijs(addedProduct.quantity, product.price)}
                </p>

                <Stack direction={['column', 'row', 'row']} mt="4">
                  <Link href="/winkelmandje">
                    <a>
                      <Button colorScheme="purple" onClick={handleClick}>
                        {content.buttonKassa}
                      </Button>
                    </a>
                  </Link>
                  <Button onClick={handleClose}>
                    {content.buttonDoorgaan}
                  </Button>
                </Stack>
              </Box>
            )}
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default CompleteProduct;
